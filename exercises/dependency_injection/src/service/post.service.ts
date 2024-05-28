import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPosts() {
    return [
      { id: 1, title: 'Angular Dependency Injection', authorId: 1 },
      { id: 2, title: 'Understanding Services and DI', authorId: 2 }
    ];
  }
}
