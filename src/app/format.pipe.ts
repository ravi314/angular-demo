import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: {name:string, desc:string}, args?: any): string {
    if(!value){
      return " "
    } else {
      return `The product name is ${value.name} - ${value.desc}`;
    }
  }

}
