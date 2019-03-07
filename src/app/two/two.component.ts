import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  providers:[StatesService]
})
export class TwoComponent {


  constructor(private stateService:StatesService) { 

  }

  decrement(){
    this.stateService.decrement()
  }

}
