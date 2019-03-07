import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngdirective',
  templateUrl: './ngdirective.component.html',
  styleUrls: ['./ngdirective.component.scss']
})
export class NgdirectiveComponent {

  constructor() { }
   user={
     name:"Vinay",
     dept:'HR',
     role:'Admin'
   }
}
