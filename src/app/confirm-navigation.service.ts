import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmNavigationService implements CanDeactivate<AddCourseComponent> {

  canDeactivate(component: AddCourseComponent): boolean{
      if(component.form.dirty){
        return confirm("Do you want to discard your changes ?")
      }
      return true;
  }
  
}
