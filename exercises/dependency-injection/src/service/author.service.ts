import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  getAuthorById(id: number) {
    const authors = [
      { id: 1, name: 'Emmanuel Martinez' },
      { id: 2, name: 'Steven Viillarosa' }
    ];
    return authors.find(author => author.id === id);
  }
}
