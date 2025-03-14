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
  template: `
    <section id="skills" class="section skills-section">
      <div class="container">
        <h2 class="section-title">{{ translate('skills.title') }}</h2>
        <p class="section-description">
          {{ translate('skills.description') }}
        </p>
        <p class="hover-instruction">
          <i class="fas fa-info-circle"></i> {{ translate('skills.hover') }}
        </p>
        
        <div class="skills-grid">
          @for (skill of skills; track skill.name) {
            <div class="skill-card">
              <div class="skill-icon" [style.color]="skill.color">
                <i [class]="skill.icon"></i>
              </div>
              <h3 class="skill-name">{{ skill.name }}</h3>
              <div class="skill-description">
                <p>{{ skill.description[currentLang] }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      background-color: var(--card-bg);
    }
    
    .hover-instruction {
      text-align: center;
      margin-bottom: 40px;
      color: var(--secondary-text);
      font-style: italic;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 30px;
    }
    
    .skill-card {
      background-color: var(--bg-color);
      border-radius: 8px;
      padding: 30px 20px;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      height: 180px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .skill-icon {
      font-size: 3rem;
      margin-bottom: 15px;
      transition: all 0.3s ease;
    }
    
    .skill-name {
      font-size: 1.2rem;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .skill-description {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      transform: translateY(100%);
      transition: all 0.3s ease;
      border-radius: 8px;
    }
    
    .skill-card:hover .skill-description {
      opacity: 1;
      transform: translateY(0);
    }
    
    .skill-card:hover .skill-icon,
    .skill-card:hover .skill-name {
      transform: translateY(-100px);
    }
    
    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
    }
  `]
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
}