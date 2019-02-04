import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
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
import {AuthGuardService} from "./auth/auth-guard.service";
import {AuthService} from "./auth/auth.service";
import {LoginComponent} from "./auth/login/login.component";

const config = {
  apiKey: 'AIzaSyBJlo5u95DM6MQ3MOCBon-QkZxE2Jn9l7I',
  authDomain: 'angular-todo-list-2ff45.firebaseapp.com',
  databaseURL: 'https://angular-todo-list-2ff45.firebaseio.com',
  projectId: 'angular-todo-list-2ff45',
  storageBucket: 'angular-todo-list-2ff45.appspot.com',
  messagingSenderId: '83098105226'
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [TasksService, HttpService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
