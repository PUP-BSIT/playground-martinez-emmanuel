import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskTitle: string = '';
  notification: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.taskTitle.trim()) {
      this.taskService.addTaskAndNotify(this.taskTitle.trim()).subscribe(message => {
        this.notification = message;
        this.taskTitle = '';
      });
    }
  }
}
