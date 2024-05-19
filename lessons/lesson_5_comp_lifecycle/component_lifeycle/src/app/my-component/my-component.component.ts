import { Component, OnChanges, Input,SimpleChanges, DoCheck, AfterViewChecked } from '@angular/core';
import  { Student } from '../../model/student';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnChanges, DoCheck, AfterViewChecked {
  @Input() myValue = 0;
  @Input({ required: true }) student!: Student;
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', this.myValue);
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }


}

