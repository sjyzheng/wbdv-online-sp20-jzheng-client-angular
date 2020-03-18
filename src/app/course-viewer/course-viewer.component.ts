import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceClient } from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  course: any = {};

  constructor(private route: ActivatedRoute, private service: CourseServiceClient) { }

  ngOnInit(): void {
   this.route.params.subscribe(params => {
     const courseId = params.courseId;
     this.service.findCourseById(courseId)
       .then(course => this.course = course);
   });

  }

}
