import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <input type="text" [(ngModel)]="inputStr">
    <app-display [text]="inputStr">
  `,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  inputStr:string;

  ngOnInit() {
  }

}
