import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../models/task';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  addForm: FormGroup;

  constructor(private tasksService: TasksService, private authService: AuthService) {}

  ngOnInit() {
    this.addForm = this.initForm();
  }

  initForm() {
    return new FormGroup({ taskName: new FormArray([new FormControl(null, Validators.required)]) });
  }

  add() {
    const tasksList = this.createTaskList();
    this.tasksService.add(tasksList);
    this.addForm = this.initForm();
  }

  createTaskList(): Array<Task> {
    const tasksList = new Array<Task>();
    const tasksArr = <[string]>this.addForm.get('taskName').value;
    tasksArr.forEach(taskName => {
      const task = { name: taskName, userId: this.authService.user.uid, created: new Date().toLocaleString(), isDone: false };
      tasksList.push(task);
    });
    return tasksList;
  }

  addField() {
    const arr = <FormArray>this.addForm.get('taskName');
    arr.push(new FormControl(null, Validators.required));
  }
}
