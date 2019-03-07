import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

   counter:number = 0;

   increment():void{
     this.counter++;
   }
   decrement():void{
    this.counter--;
  }
}
