import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RepoService } from '../../services/repo.service';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Repo } from '../../model/repo.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  repos$: Observable<Repo[]> = of([]);
  searchControl = new FormControl();
  error: string = '';

  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.repos$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(username => {
        if (username) {
          return this.repoService.getRepos(username).pipe(
            catchError(err => {
              this.error = err;
              return of([]);
            })
          );
        } else {
          return of([]);
        }
      })
    );
  }
}