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
        'en-US': 'Proficient in writing semantic HTML5 markup for accessible and SEO-friendly websites.',
        'pt-BR': 'Proficiente em escrever marcação HTML5 semântica para sites acessíveis e otimizados para SEO.'
      }
    },
    {
      name: 'Spring Boot',
      icon: 'fas fa-leaf',
      color: '#339933',
      description: {
        'en-US': 'Building server-side applications with Node.js and Express.',
        'pt-BR': 'Construção de aplicações server-side com Node.js e Express.'
      }
    },
    {
      name: 'Docker',
      icon: 'fab fa-docker',
      color: '#264DE4',
      description: {
        'en-US': 'Strong CSS skills including Flexbox, Grid, animations, and responsive design.',
        'pt-BR': 'Fortes habilidades em CSS incluindo Flexbox, Grid, animações e design responsivo.'
      }
    },
    {
      name: 'AWS',
      icon: 'fab fa-aws',
      color: '#F7DF1E',
      description: {
        'en-US': 'Advanced JavaScript including ES6+ features, async programming, and DOM manipulation.',
        'pt-BR': 'JavaScript avançado incluindo recursos ES6+, programação assíncrona e manipulação do DOM.'
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
        'en-US': 'Creating interactive UIs with React and its ecosystem.',
        'pt-BR': 'Criação de interfaces interativas com React e seu ecossistema.'
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