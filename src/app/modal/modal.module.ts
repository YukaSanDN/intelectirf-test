import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalService} from './modal.service';
import { ConfirmDeletionComponent } from './confirm-deletion/confirm-deletion.component';



@NgModule({
  declarations: [ConfirmDeletionComponent],
  imports: [
    CommonModule
  ],
  exports: []
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders<ModalModule>{
    return {
      ngModule: ModalModule,
      providers: [
        ModalService
      ]
    };
  }
}
