import {
  Component, ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {IModalData, IRemoveData, ModalService} from './modal.service';

import {takeUntil} from 'rxjs/operators';
import {Unsubscribe} from '../util/unsubscribe';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent extends Unsubscribe  implements OnInit {
  @ViewChild('contentModal', {read: ViewContainerRef})
  public modal: ViewContainerRef;
  public isOpen = false;
  private  componentFactory: ComponentFactory<any>;
  private componentRef: ComponentRef<any>;
  constructor(
    private readonly modalService: ModalService,
    private readonly cfr: ComponentFactoryResolver
  ) { super(); }

  ngOnInit(): void {
    this.modalService.modalWindows$
      .pipe(
        takeUntil(this.unSubscribe)
      )
      .subscribe((data: IModalData  | null | number) => {
      if ( !data ){
        this.close();
        return;
      }
      if ( typeof data === 'object'){
      this.isOpen = true;
      const Data: IModalData  = data as IModalData;
      this.componentFactory = this.cfr.resolveComponentFactory(Data.component);
      this.componentRef = this.modal.createComponent(this.componentFactory);
      Object.keys(Data.context).forEach((keyName: string) => {
        this.componentRef.instance[keyName] = Data.context[keyName];
      });
      }
    });
  }// ngOnInit
  public close(){
    if ( this.modal){
      this.componentRef.destroy();
    }
    this.isOpen = false;
  }
}
