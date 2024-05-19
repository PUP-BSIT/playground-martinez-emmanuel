import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-one',
  styleUrl: './one.component.css',
  template: `
    <button (click)="increment()">Increment from Component 1</button>
  `,
})
export class OneComponent implements OnInit {
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.onUpdate.subscribe((newValue) => {
      console.log(`Comp 1 - count is updated: ${newValue}`);
    });
  }

  increment() {
    this.counterService.increment();
  }
}
