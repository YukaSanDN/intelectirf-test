import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Task} from '@interfaces/task.interface';
import {catchError} from 'rxjs/operators';


const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AppComponentService{

  public constructor(
    private readonly http: HttpClient
  ) { }

  public getTasks(): Observable<Task[] | null> {
    return this.http.get<Task[] | null>('http://localhost:3000/tasks');
  }

  public deleteTask(idTask): Observable<Task> {
    return this.http.delete<Task>('http://localhost:3000/tasks/' + idTask.id);
  }
  public addTask(newTask): Observable<Task | null>{
    return this.http.post<Task>(
    'http://localhost:3000/tasks',
      JSON.stringify(newTask), headerOption
    );
  }
  public updateTask(updateTask, idTask): Observable<Task | null>{
    return this.http.put<Task>('http://localhost:3000/tasks/' + idTask,
      JSON.stringify(updateTask), headerOption
    ).pipe(
      catchError(err => of(null))
    );
  }

}
