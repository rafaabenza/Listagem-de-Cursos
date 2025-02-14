  import { Component, OnInit } from '@angular/core';
  import { CourseService } from '../../course.service';
  import { Course } from '../../course.model';
  import { CommonModule } from '@angular/common';


  @Component({
    selector: 'app-course-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
  })
  export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
      this.courseService.getCourses().subscribe(courses => {
        this.courses = courses;
      });
    }
  }
