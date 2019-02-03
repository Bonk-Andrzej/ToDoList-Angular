import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DoneTaskComponent} from "./done-task/done-task.component";
import {TodoTaskComponent} from "./todo-task/todo-task.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/todoTask',
    pathMatch: 'full'
  },

  {
    path: 'doneTask',
    component: DoneTaskComponent
  },
  {
    path: 'todoTask',
    component: TodoTaskComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
