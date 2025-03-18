import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Project {
  title: string;
  description: {
    'en-US': string;
    'pt-BR': string;
  };
  image: string;
  technologies: string[];
  //liveLink: string;
  codeLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css' 
})
export class ProjectsComponent {
  private translationService = inject(TranslationService);
  currentLang: 'en-US' | 'pt-BR' = 'en-US';
  
  projects: Project[] = [
    {
      title: 'E-Commerce Website',
      description: {
        'en-US': 'E-commerce Back-end project based in Events-Driven, Hexagonal and Microservices Architectures. The project has the following services, Customer, Products, Order, Notification, Payment and uses SAGA Pattern to compensate the transactions',
        'pt-BR': 'Projeto de back-end de um E-commerce baseado nas arquiteturas orientada a eventos, hexagonal e de microsserviços. O projeto tem os seguintes serviços, Cliente, Produtos, Pedido, Notificação, Pagamento e utiliza o padrão SAGA para compensar as transações.'
      },
      image: '/assets/img/ecommerce.png',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'Spring Cloud', 'AWS', 'Postgres', 'MongoDB'],
      //liveLink: '#',
      codeLink: 'https://github.com/gb-alves03/ecommerce-microservices-architecture'
    },
    {
      title: 'Docker Manager',
      description: {
        'en-US': 'A backend application that allows you to manage containers and images in Docker and publish them to Docker Hub.',
        'pt-BR': 'Uma aplicação backend que permite gerenciar containeres e imagens no Docker além de publicar no Docker Hub.'
      },
      image: '/assets/img/docker.png',
      technologies: ['Kotlin', 'Spring Boot', 'Apache HTTP Client', 'Docker API'],
      //liveLink: '#',
      codeLink: 'https://github.com/gb-alves03/docker-manager'
    },
    {
      title: 'Biometric Recognition Tool',
      description: {
        'en-US': 'Biometric Recognition Tool is a biometric recognition tool developed in Kotlin. The project uses advanced image processing algorithms, such as SIFT (Scale-Invariant Feature Transform) and FLANN (Fast Library for Approximate Nearest Neighbors), integrated into a command line interface (CLI) to allow user interaction.',
        'pt-BR': 'A Biometric Recognition Tool é uma ferramenta de reconhecimento biométrico desenvolvida em Kotlin. O projeto usa algoritmos avançados de processamento de imagens, como SIFT (Scale-Invariant Feature Transform) e FLANN (Fast Library for Approximate Nearest Neighbors), integrados a uma interface de linha de comando (CLI) para permitir a interação do usuário.'
      },
      image: '/assets/img/biometry.jpg',
      technologies: ['Kotlin', 'OpenCV', 'Postgres'],
      //liveLink: '#',
      codeLink: 'https://github.com/gb-alves03/biometric-recognition-tool'
    }
  ];
  
  constructor() {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }
  
  translate(key: string): string {
    return this.translationService.translate(key);
  }

  trackByTitle(index: number, project: Project): string {
    return project.title;
  }

  trackByTech(index: number, technology: string): string {
    return technology;
  }
}