import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Course } from '../course';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements AfterViewInit, OnInit {

  @ViewChild('f') form;



  constructor(private courseService:CoursesService, private router:Router) { }

  ngOnInit(){
    //console.log('value of form variable  inside on init', this.form );
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //console.log('value of form variable inside after view init method',this.form );
    
  }
  

  handleSubmit(f){
    let course:Course = {id: Math.random(), name:f.value.courseName, duration:f.value.duration, currentBatch:false, price:f.value.price,rating:5, startDate:new Date()};
    this.courseService.addCourse(course);
    this.router.navigate(['courses/list']);
  }
}
