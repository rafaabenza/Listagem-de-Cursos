import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Desenvolvedor Front-End',
      description: 'Aprenda HTML, CSS, JavaScript e frameworks.',
      duration: 40,
      image: 'src/app/img/virtual-programming-with-vr-glasses.jpg',
    },
    {
      id: 2,
      title: 'Inovação e Gestão',
      description: 'Metodologias Ágeis, Softskils, Liderança e Gestão, Startups, Vendas e mais ..',
      duration: 25,
      image: 'src/app/img/broker-looking-laptop-analyzing-stock-market-invest-trading-stocks-graph.jpg',
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Ciência de dados, BI, SQL, Excel, Machine Learning, Estatística e mais ...',
      duration: 45,
      image: 'src/app/img/programming-background-collage.jpg',
    }
  ];

  course: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const courseId = +this.route.snapshot.paramMap.get('id')!;  // Obtém o id do curso da URL
    this.course = this.courses.find(c => c.id === courseId); // Encontra o curso com o id correspondente
  }

  goBack() {
    this.router.navigate(['/']);  // Navega de volta para a página inicial ou lista de cursos
  }
}
