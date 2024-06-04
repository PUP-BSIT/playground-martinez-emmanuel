import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Repo, RepoResponse } from '../model/repo.model';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getRepos(username: string): Observable<Repo[]> {
    return this.http.get<RepoResponse[]>(`${this.apiUrl}/${username}/repos`).pipe(
      retry(1), // Retry the request once before failing
      map((data: RepoResponse[]) => data.map((repo: RepoResponse) => ({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description
      }))),
      catchError(error => {
        return throwError('Something went wrong!');
      })
    );
  }
}