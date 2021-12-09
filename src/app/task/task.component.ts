import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {Task} from '@interfaces/task.interface';
import {AppComponentService} from '../app.component.service';
import {IModalData, IRemoveData, ModalService} from '../modal/modal.service';
import {ConfirmDeletionComponent} from '../modal/confirm-deletion/confirm-deletion.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent  implements OnInit {
  @Input()
  private taskItem: Task;
  public isUpdate = false;
  public inputValue: string;
  public newInputValue: HTMLInputElement | undefined;
  public isCompleted: boolean;
  constructor(
    private ComponentService: AppComponentService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.inputValue = this.taskItem.task;
    this.isCompleted = this.taskItem.isCompleted;
  }
  public updateClickTask(){
    this.isUpdate = true;
  }// updateClickTask
  public noUpdateClickTask(){
    if (this.newInputValue !== undefined){
      this.newInputValue.value = this.inputValue;
    }
    this.isUpdate = false;
  }// noUpdateClickTask
  public inputChange(e){
    this.newInputValue = e.target;
  }// inputChange
  public updateTaskTitle(){
    if (this.newInputValue !== undefined){
      const newTitleJson = {
        task: (this.newInputValue as HTMLInputElement).value,
        isCompleted: this.taskItem.isCompleted
      };
      this.ComponentService.updateTask(newTitleJson, this.taskItem.id).subscribe((task) => {
        if (task === null){
          this.noUpdateClickTask();
        }
        else {
          this.inputValue = (this.newInputValue as HTMLInputElement).value;
          this.isUpdate = false;
        }
      });
    }
    else {
      this.isUpdate = false;
    }
  }// updateTaskTitle
  public updateTaskCompleted(e){
    const newJson = {
      task: this.inputValue,
      isCompleted: (e.target as HTMLInputElement).checked
    };
    this.ComponentService.updateTask(newJson, this.taskItem.id).subscribe((task) => {
      if (task !== null){
        this.isCompleted = task.isCompleted;
      }
    });
  }
  public removeTask(e){
    this.modalService.open({
      component: ConfirmDeletionComponent,
      context: {
       close : () => {
         this.modalService.close();
      },
      removeTask : () => {
         this.modalService.removeTask(this.taskItem.id);
      }
      }
    });
  }// removeTask
}
