import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'API',
      description: 'API feita para extrair e enviar informações em xml para uma conciliadora bancária',
      image: 'assets/images/project1.jpeg'  // Altere o caminho da imagem conforme necessário
    },
    {
      name: 'CALC.JS',
      description: 'Calculadora com 2 temas desenvolvida em Javascript',
      image: 'assets/images/project2.jpeg'  // Altere o caminho da imagem conforme necessário
    },
    {
      name: 'WEB SITE PIZZARIA',
      description: 'Desenvolvimento de um website profissional e responsivo',
      image: 'assets/images/project4.jpg'  // Altere o caminho da imagem conforme necessário
    },
    {
      name: 'WEB SITE BARBEARIA',
      description: 'Desenvolvimento de um website profissional para uma barbearia',
      image: 'assets/images/project5.jpg'  // Altere o caminho da imagem conforme necessário
    }
  ];

}
