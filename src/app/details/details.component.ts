import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  value = 'warning';
  data = `Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Amet ratione nobis harum 
  corporis veniam illo natus magnam ipsa 
  doloribus recusandae`;
  title='Angular 6';

  constructor() { }

  ngOnInit() {
  }

}
