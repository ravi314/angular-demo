import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  appName = "Angular Course";
  links=['Home','About','Services','Contact','Portfolio'];

  constructor() { }

  ngOnInit() {
  }

}
