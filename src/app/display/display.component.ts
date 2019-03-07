import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnChanges {

  @Input() text;

  enteredValue:string;
  previousValue:string;

  constructor() { }

  ngOnInit() {
    console.log('called OnInit inside the Display Component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.enteredValue = JSON.stringify(changes['text'].currentValue);
    this.previousValue = JSON.stringify(changes['text'].previousValue);
  }
}
