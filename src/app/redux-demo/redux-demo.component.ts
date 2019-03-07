import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppStore } from '../IAppStore';

@Component({
  selector: 'app-redux-demo',
  templateUrl: './redux-demo.component.html',
  styleUrls: ['./redux-demo.component.scss']
})
export class ReduxDemoComponent implements OnInit {

  counter = 0;

  constructor(private ngRedux: NgRedux<IAppStore>) {
    ngRedux.subscribe(()=>{
      let store = ngRedux.getState();
      this.counter = store.counter;
    })
   }

  ngOnInit() {
  }

  increment(){
    this.ngRedux.dispatch({type:'INCREMENT'})
  }

}
