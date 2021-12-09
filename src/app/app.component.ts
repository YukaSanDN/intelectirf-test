import { Component, OnInit } from '@angular/core';
import {Task} from '@interfaces/task.interface';
import {AppComponentService} from './app.component.service';
import {Observable} from 'rxjs';
import {takeUntil} from "rxjs/operators";
import {IModalData, ModalService} from "./modal/modal.service";
import {Unsubscribe} from "./util/unsubscribe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Unsubscribe implements OnInit{
  newTitleTask: HTMLInputElement;
  tasks: Task[];
  searchStr: string;
  tasks$: Observable<Task[] | null> = this.ComponentService.getTasks();
  constructor(
    private ComponentService: AppComponentService,
    private modalService: ModalService
  ) {super(); }

  ngOnInit(): void {
    this.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });

    this.modalService.modalWindows$
      .pipe(
        takeUntil(this.unSubscribe)
      )
      .subscribe(((data: IModalData | null | number) => {
        if (typeof data === 'number'){
          const dTask = this.tasks.filter((elem) => {
            if ( elem.id === data as number){return elem;}
          });
          if ( dTask.length === 1){
            this.ComponentService.deleteTask(dTask[0])
              .subscribe((task) => {
                  const indexR = this.tasks.indexOf(dTask[0]);
                  if ( indexR ){
                    this.tasks.splice(indexR, 1);
                  }
                  this.modalService.close();
              });
          }
        }
      }));
  }// ngOnInit
  public addNewTask(): void{
    if ( this.newTitleTask.value.length > 0){
     const newTitleJson = {
        task: this.newTitleTask.value,
        isCompleted: false
      };
     this.ComponentService.addTask(newTitleJson).subscribe((task) => {
       this.tasks.push( task );
       this.newTitleTask.value = '';
     });
    }// if
  }// addNewTask
  public newTaskTitleF(e): void{
    this.newTitleTask = (e.target as HTMLInputElement);
  }
  public filterTask(e): void{
    this.searchStr = (e.target as HTMLInputElement).value;
  }// filterTask

}
