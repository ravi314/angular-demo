import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(courses: Course[], args?: any): Course[] {
    //return courses.sort((course1, course2)=> course1.price > course2.price ? 1:-1);
    return courses.filter(course=> course.price < 10000);
  }

}
