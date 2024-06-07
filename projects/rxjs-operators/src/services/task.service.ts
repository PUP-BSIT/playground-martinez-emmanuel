import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, filter, debounceTime } from 'rxjs/operators';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  private tasks$ = this.tasksSubject.asObservable();

  constructor() {}

  addTask(title: string) {
    const tasks = this.tasksSubject.getValue();
    const newTask: Task = { id: Date.now(), title, completed: false };
    this.tasksSubject.next([...tasks, newTask]);
  }

  completeTask(id: number) {
    const tasks = this.tasksSubject.getValue();
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: true } : task
    );
    this.tasksSubject.next(updatedTasks);
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  searchTasks(term: string): Observable<Task[]> {
    return this.tasks$.pipe(
      debounceTime(300),
      map(tasks =>
        tasks.filter(
          task => task.title.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }
}
