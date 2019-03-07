import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPhoneformatter]'
})
export class PhoneformatterDirective {

  @Input('appPhoneformatter') countryCode;
  @HostListener('blur') onblur(){
    let phoneNumber:string = this.field.nativeElement.value;
    if (!phoneNumber.startsWith('(+')){
      this.field.nativeElement.value = `(+${this.countryCode})- ${phoneNumber}`;
    }
  }

  constructor(private field:ElementRef) { 
    
  }

}
