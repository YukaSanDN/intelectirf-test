import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppComponentService} from './app.component.service';
import { HttpClientModule} from '@angular/common/http';
import { TaskComponent } from './task/task.component';
import { TaskFilterPipe } from './task-filter.pipe';
import { ModalComponent } from './modal/modal.component';
import {ModalModule} from './modal/modal.module';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskFilterPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [AppComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
