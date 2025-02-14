import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true, // Definindo o componente como standalone
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  // Definindo a propriedade  dos cursos
  courses = [
    { id: 1,
      name: 'Desenvolvedor Front-End',
      category: 'Programação',
      duration: '40 horas',
      description:'HTML, CSS, React, Angular, jQuery e mais ...',
    },
    { id: 2,
      name: 'Inovação e Gestão',
      category: 'Gestão',
      duration: '25 horas',
      description:'Metodologias Ágeis, Softskils, Liderança e Gestão, Startups, Vendas e mais ...',
    },
    { id: 3,
      name: 'Ciência de Dados',
      category: 'Dados',
      duration: '25 horas',
      description:'Ciência de dados, BI, SQL, Excel, Machine Learning, Estatística e mais ...',
    },
  ];

  goToDetail(courseId: number) {
    console.log(`Going to detail for course ${courseId}`);
  }
}
