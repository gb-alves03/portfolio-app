import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Skill {
  name: string;
  icon: string;
  color: string;
  description: {
    'en-US': string;
    'pt-BR': string;
  };
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  private translationService = inject(TranslationService);
  currentLang: 'en-US' | 'pt-BR' = 'en-US';
  
  skills: Skill[] = [
    {
      name: 'Java',
      icon: 'fab fa-java',
      color: '#FF0000',
      description: {
        'en-US': 'Experience building RESTful APIs with Spring Boot and Java.',
        'pt-BR': 'Experiência na construção de APIs RESTful com Spring Boot e Java.'
      }
    },
    {
      name: 'Spring Boot',
      icon: 'fas fa-leaf',
      color: '#339933',
      description: {
        'en-US': 'Experience building RESTful APIs with Spring Boot and Java.',
        'pt-BR': 'Experiência na construção de APIs RESTful com Spring Boot e Java.'
      }
    },
    {
      name: 'Docker',
      icon: 'fab fa-docker',
      color: '#264DE4',
      description: {
        'en-US': 'Containerizing applications with Docker and Docker Compose.',
        'pt-BR': 'Containerizando aplicações com Docker e Docker Compose.'
      }
    },
    {
      name: 'AWS',
      icon: 'fab fa-aws',
      color: '#F7DF1E',
      description: {
        'en-US': 'Deploying applications to AWS using services like EC2, Lambda, and RDS.',
        'pt-BR': 'Implantando aplicações na AWS usando serviços como EC2, Lambda e RDS.'
      }
    },
    {
      name: 'Angular',
      icon: 'fab fa-angular',
      color: '#DD0031',
      description: {
        'en-US': 'Building robust single-page applications with Angular framework.',
        'pt-BR': 'Construção de aplicações robustas de página única com o framework Angular.'
      }
    },
    {
      name: 'TypeScript',
      icon: 'fab fa-js',
      color: '#3178C6',
      description: {
        'en-US': 'Experience with TypeScript for type-safe code and better developer experience.',
        'pt-BR': 'Experiência com TypeScript para código seguro de tipos e melhor experiência de desenvolvedor.'
      }
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      color: '#4B0082',
      description: {
        'en-US': 'Version control and collaboration using Git and GitHub.',
        'pt-BR': 'Controle de versão e colaboração usando Git e GitHub.'
      }
    },
    {
      name: 'Git',
      icon: 'fab fa-git-alt',
      color: '#F05032',
      description: {
        'en-US': 'Version control and collaboration using Git and GitHub.',
        'pt-BR': 'Controle de versão e colaboração usando Git e GitHub.'
      }
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

  trackBySkillName(index: number, skill: Skill): string {
    return skill.name;
  }
}