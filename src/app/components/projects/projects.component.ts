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
  liveLink: string;
  codeLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section projects-section">
      <div class="container">
        <h2 class="section-title">{{ translate('projects.title') }}</h2>
        <p class="section-description">
          {{ translate('projects.description') }}
        </p>
        
        <div class="projects-grid">
          @for (project of projects; track project.title) {
            <div class="project-card">
              <div class="project-image">
                <img [src]="project.image" [alt]="project.title" />
              </div>
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">
                  {{ project.description[currentLang] }}
                </p>
                <div class="project-tech">
                  @for (tech of project.technologies; track tech) {
                    <span class="tech-tag">{{ tech }}</span>
                  }
                </div>
                <div class="project-links">
                  <a [href]="project.liveLink" target="_blank" class="btn btn-sm">
                    <i class="fas fa-external-link-alt"></i> Live
                  </a>
                  <a [href]="project.codeLink" target="_blank" class="btn btn-sm btn-outline">
                    <i class="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      background-color: var(--bg-color);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 40px;
    }
    
    .project-card {
      background-color: var(--card-bg);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }
    
    .project-image {
      height: 200px;
      overflow: hidden;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.1);
    }
    
    .project-content {
      padding: 25px;
    }
    
    .project-title {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: var(--text-color);
    }
    
    .project-description {
      color: var(--secondary-text);
      margin-bottom: 20px;
      line-height: 1.6;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    .tech-tag {
      background-color: var(--primary-color);
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 0.8rem;
    }
    
    .project-links {
      display: flex;
      gap: 15px;
    }
    
    .btn-sm {
      padding: 8px 15px;
      font-size: 0.9rem;
    }
    
    .btn-outline {
      background: transparent;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
    }
    
    .btn-outline:hover {
      background-color: var(--primary-color);
      color: white;
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {
  private translationService = inject(TranslationService);
  currentLang: 'en-US' | 'pt-BR' = 'en-US';
  
  projects: Project[] = [
    {
      title: 'E-Commerce Website',
      description: {
        'en-US': 'A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.',
        'pt-BR': 'Uma plataforma de e-commerce totalmente responsiva com filtragem de produtos, funcionalidade de carrinho e integração de pagamento.'
      },
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Task Management App',
      description: {
        'en-US': 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.',
        'pt-BR': 'Um aplicativo de produtividade para gerenciar tarefas com funcionalidade de arrastar e soltar e recursos de colaboração em equipe.'
      },
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Weather Dashboard',
      description: {
        'en-US': 'A weather application that displays current and forecasted weather data for any location using a third-party API.',
        'pt-BR': 'Um aplicativo meteorológico que exibe dados meteorológicos atuais e previstos para qualquer localização usando uma API de terceiros.'
      },
      image: 'https://via.placeholder.com/600x400',
      technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
      liveLink: '#',
      codeLink: '#'
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