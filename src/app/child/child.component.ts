import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('course') test;
  @Output('cart')  updateCart = new EventEmitter();
  @Output('deleteCourse')  deleteCourse = new EventEmitter();
  buttonState:boolean = false;
  cartText="Add to Cart";
  constructor() { }

  ngOnInit() {
  }

  addItems(item){
    this.updateCart.emit(item);
    this.buttonState = !this.buttonState;
    this.cartText = !this.buttonState ?"Add To Cart": "Remove from Cart";
  }

  removeCourse(item){
    this.deleteCourse.emit(item);

  }

}
