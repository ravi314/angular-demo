import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(private courseService:CoursesService) { }

  product = {
    name:'Iphone ',
    desc:'Awesome phone ....'
  }

  newCourse:string;
  courses:Course[];
  /*submitCourse(courseName){
    this.courses.push({name:courseName.value,duration:3,currentBatch:false,price:12000});
    courseName.value='';
  }*/

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.courses = this.courseService.courses;
  }
  submitCourse(){
    this.courseService.addCourse({id:23,name:this.newCourse,duration:3,currentBatch:false,price:12000,rating:5.67,startDate:new Date()});
    this.newCourse='';
  }

  addItemToCart(item){
    console.log(`Fetched the item selected by the user ${item.name}`);
  }

  deleteCourse(item:Course){
    this.courseService.removeCourse(item);
  }

}
