import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  details:string;
  handle:Subscription;
  courseId:number;
  title='Angular 6';
  
  constructor(private courses:CoursesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.handle = this.route.paramMap.subscribe((param)=>{
      this.courseId = +param.get('id');
    })
    this.details = this.courses.getCourseDetails(this.courseId);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.handle.unsubscribe();
  }

}
