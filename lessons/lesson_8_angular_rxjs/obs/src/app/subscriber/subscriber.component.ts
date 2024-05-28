/* import { Component, OnDestroy, OnInit } from '@angular/core';
import { NumberGeneratorService } from '../../service/number-generator.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-subscriber',
  styleUrls: ['./subscriber.component.css'],
  template: `{{ generatedNumber }}`
})
export class SubscriberComponent implements OnInit, OnDestroy {
  generatedNumber = 0;
  private unsubscribe = new Subject<void>();

  constructor(protected numberGeneratorService: NumberGeneratorService) {}

  ngOnInit(): void {
    this.numberGeneratorService.numberListener
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((num) => {
        this.generatedNumber = num;
        console.log(`The generated number is ${this.generatedNumber}`);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}



import { Component } from '@angular/core';
import { NumberGeneratorService } from '../../service/number-generator.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-subscriber',
  styleUrls: ['./subscriber.component.css'],
  template: `{{ generatedNumber }}`
})
export class SubscriberComponent {
  generatedNumber = 0;

  constructor(protected numberGeneratorService: NumberGeneratorService) {
    this.numberGeneratorService.numberListener
      .pipe(takeUntilDestroyed())
      .subscribe((num) => {
        this.generatedNumber = num;
        console.log(`The generated number is ${this.generatedNumber}`);
      });
  }
}

*/

import { Component } from '@angular/core';
import { NumberGeneratorService } from '../../service/number-generator.service';

@Component({
  selector: 'app-subscriber',
  styleUrl: './subscriber.component.css',
  template: `{{ numberGeneratorService.numberListener | async }}`,
})
export class SubscriberComponent {
  constructor(protected numberGeneratorService: NumberGeneratorService){}
}
  
