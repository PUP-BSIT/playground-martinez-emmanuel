import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-two',
  styleUrl: './two.component.css',
  template: `
    <button (click)="increment()">Increment from Component 2</button>
  `,
})
export class TwoComponent implements OnInit {
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.onUpdate.subscribe((newValue) => {
      console.log(`Comp 2 - count is updated: ${newValue}`);
    });
  }

  increment() {
    this.counterService.increment();
  }
}