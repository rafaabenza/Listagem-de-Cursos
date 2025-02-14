import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from "./components/course-list/course-list.component";
import { FooterComponent } from "./components/footer/footer.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CourseListComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-front-end';
}
