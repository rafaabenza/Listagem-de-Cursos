import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from "./components/course-list/course-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CourseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-front-end';
}
