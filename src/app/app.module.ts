import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AddTaskComponent} from "./add-task/add-task.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TasksService} from "./services/tasks.service";
import {HttpService} from "./services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app.routing.module";
import {DoneTaskComponent} from "./done-task/done-task.component";
import {TodoTaskComponent} from "./todo-task/todo-task.component";

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    DoneTaskComponent,
    TodoTaskComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TasksService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
