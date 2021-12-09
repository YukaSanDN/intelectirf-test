import {Injectable, Type} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export interface IModalData{
  component: Type<any>;
  context: any;
}

export interface IRemoveData{
  id: bigint;
  remove: boolean;
}
@Injectable()
export class ModalService {

  private modalWindows: Subject<IModalData |  number | null> = new Subject();
  constructor() { }

  public open(obj: IModalData): void{
    this.modalWindows.next(obj);
  }// open
  public get modalWindows$(): Observable<any>{
    return this.modalWindows.asObservable();
  }// modalWindows$
  public close(): void{
    this.modalWindows.next(null);
  }// close
  public removeTask(id: number): void{
    this.modalWindows.next(id);
  }
}
