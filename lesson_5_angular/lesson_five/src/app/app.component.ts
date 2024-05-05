import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projection';
  /* isActive = false;
  isLoggedIn = true; 
  students = ['student1', 'student2', 'student3'];

  @ViewChild('myInput') myInput: ElementRef;
  logInputValue() {
    console.log(this.myInput.nativeElement.value);
  }
  */
}
