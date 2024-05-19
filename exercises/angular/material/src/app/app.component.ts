import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from './dialog/dialog.component';

export interface UserData {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, // Duration in milliseconds
    });
  }
  
  title = 'material';
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  progressValue = 50;

  onDrop(event: any) {
    const movedItem = this.items.splice(event.previousIndex, 1)[0];
    this.items.splice(event.currentIndex, 0, movedItem);
  }

  simulateProgress() {
    setInterval(() => {
      this.progressValue += 5;
      if (this.progressValue >= 100) {
        this.progressValue = 0; // Reset progress when it reaches 100%
      }
    }, 500);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  displayedColumns: string[] = ['name', 'age'];
  dataSource: UserData[] = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
}
