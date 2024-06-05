// dashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  posts = [
    { id: 1, title: 'First Post', excerpt: 'This is the first post.' },
    { id: 2, title: 'Second Post', excerpt: 'This is the second post.' },
    { id: 3, title: 'Third Post', excerpt: 'This is the third post.' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
