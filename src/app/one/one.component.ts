import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  providers:[StatesService]
})
export class OneComponent {


  constructor(private stateService:StatesService) { 

  }

  increment(){
    this.stateService.increment()
  }
}
