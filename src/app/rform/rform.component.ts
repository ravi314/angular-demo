import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../CustomValidators';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.scss']
})
export class RformComponent {

  form = new FormGroup(
    {
      courseName: new FormControl( '', [ 
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
        CustomValidators.coursenamevalidator
       ]
      ),
      duration: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    }
  );

  get coursename(){
      return this.form.get('courseName');
  }

  get duration(){
    return this.form.get('duration');
  }

  get price(){
    return this.form.get('price');
  }

  submitForm(form){
    console.log('came inside the submit button');
    this.form.setErrors({invalidcourseName:"invalid course Name", incorrectpriceformat:true});
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('any clean up activity to be performed should go here ....');
  }
}
