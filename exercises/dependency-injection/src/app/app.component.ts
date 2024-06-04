import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../service/greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greeting: string = '';

  constructor(private greetingService: GreetingService) { }

  ngOnInit(): void {
    this.greeting = this.greetingService.getGreeting();
  }
}
