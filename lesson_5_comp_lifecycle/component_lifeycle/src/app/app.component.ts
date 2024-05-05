import { Component } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pVal = 0;
  student: Student = {
    id: 1,
    given_name: 'Juan',
    last_name: 'Dela Cruz',
  };

}

