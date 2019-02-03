import { Injectable } from '@angular/core';

import { Task } from '../models/task';
import { HttpService } from './http.service';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class TasksService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getTasks().subscribe(list => {
      this.tasksListObs.next(list);
    });
  }

  add(task: Array<Task>) {
    const list = this.tasksListObs.getValue().concat(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleDateString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
  saveTasksInDb() {
    this.httpService.saveTasks(this.tasksListObs.getValue());
  }

}
