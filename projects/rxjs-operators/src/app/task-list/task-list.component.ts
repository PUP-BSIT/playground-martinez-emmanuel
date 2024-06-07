import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$ = this.taskService.getTasks();
  searchTerm: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  completeTask(id: number) {
    this.taskService.completeTask(id);
  }

  searchTasks() {
    this.tasks$ = this.taskService.searchTasks(this.searchTerm);
  }
}
