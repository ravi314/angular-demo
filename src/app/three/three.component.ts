import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent {

  stateService:StatesService;
  constructor(stateService:StatesService) { 
    this.stateService = stateService;
  }


  ngOnInit() {
  }

}
