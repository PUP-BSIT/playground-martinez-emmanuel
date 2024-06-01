import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  styleUrls: ['./first.component.css'],
  template: `The passed parameters are {{ queryParamsString | json }}`
})
export class FirstComponent implements OnInit {
  queryParamsString = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.queryParamsString = JSON.stringify(params);
    });
  }
}
