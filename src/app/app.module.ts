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
import {CheckedDirective} from "./shared/checked.directive";
import {DateDirective} from "./shared/date.directive";
import {TransformTaskPipe} from "./shared/transform-task.pipe";
import {SortNamePipe} from "./shared/sort-name.pipe";

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    DoneTaskComponent,
    TodoTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,

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
