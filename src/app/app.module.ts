import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { BrowserModule } from '@angular/platform-browser';

bootstrapApplication(HeaderComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule)],
}).catch(err => console.error(err));

bootstrapApplication(FooterComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule)],
}).catch(err => console.error(err));
