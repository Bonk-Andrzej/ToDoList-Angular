import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../models/task';
import {DialogService} from "../services/dialog.service";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService, private dialogService: DialogService) {

    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter(t => t.isDone === false);
    });
  }

  ngOnInit() {
  }

  remove(task: Task) {
    const msg = 'Are you sure you want delete task?  ';
    this.dialogService.openConfirmDialog(msg)
      .afterClosed().subscribe(resp => {
       if (resp){
         this.tasksService.remove(task);
       }
    });

  }

  done(task: Task) {
    this.tasksService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }

  save() {
    this.tasksService.saveTasksInDb();
  }
}
