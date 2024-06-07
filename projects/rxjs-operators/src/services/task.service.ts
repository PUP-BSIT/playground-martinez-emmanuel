import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, filter, debounceTime, throttleTime, mergeMap, switchMap, combineLatest } from 'rxjs/operators';

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
  private searchTerms = new BehaviorSubject<string>('');

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

  searchTasks(term: string): void {
    this.searchTerms.next(term);
  }

  getFilteredTasks(): Observable<Task[]> {
    return this.searchTerms.pipe(
      debounceTime(300),
      combineLatest(this.tasks$),
      map(([term, tasks]) =>
        tasks.filter(task => task.title.toLowerCase().includes(term.toLowerCase()))
      )
    );
  }

  getTaskCount(): Observable<number> {
    return this.tasks$.pipe(
      map(tasks => tasks.length)
    );
  }

  getCompletedTasks(): Observable<Task[]> {
    return this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.completed))
    );
  }

  // Example of using switchMap
  addTaskAndNotify(title: string): Observable<string> {
    return of(title).pipe(
      throttleTime(1000),
      mergeMap(title => {
        this.addTask(title);
        return of(`Task "${title}" added successfully`);
      })
    );
  }
}
