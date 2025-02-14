import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'Angular para Iniciantes',
      description: 'Aprenda Angular do zero.',
      category: 'Front-End',
      imageUrl: 'assets/angular.png'
    },
    {
      id: 2,
      title: 'SCSS Avançado',
      description: 'Aprofunde-se no SCSS para estilizar melhor seus projetos.',
      category: 'Front-End',
      imageUrl: 'assets/scss.png'
    }
  ];

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return of(this.courses.find(course => course.id === id));
  }
}
