import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$ = this.taskService.getFilteredTasks();
  totalTasks$ = this.taskService.getTaskCount();
  completedTasksCount$: Observable<number>;
  searchTerm: string = '';

  constructor(private taskService: TaskService) {
    this.completedTasksCount$ = this.taskService.getCompletedTasks().pipe(
      map(tasks => tasks.length)
    );
  }

  ngOnInit(): void {}

  completeTask(id: number) {
    this.taskService.completeTask(id);
  }

  searchTasks() {
    this.taskService.searchTasks(this.searchTerm);
  }
}
