import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <div class="container hero-content">
        <h1 class="hero-title">
          {{ translate('hero.greeting') }} <span class="highlight">GABRIEL HENRIQUE ALVES</span>
        </h1>
        <p class="hero-description">
          {{ translate('hero.description') }}
        </p>
        <a href="assets/Gabriel Henrique Alves - Resume (PT-BR).pdf" download class="btn hero-cta">
          <i class="fas fa-download"></i> {{ translate('hero.downloadCV') }}
        </a>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      background-color: var(--bg-color);
      padding-top: 70px;
    }
    
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    
    .highlight {
      color: var(--primary-color);
    }
    
    .hero-description {
      font-size: 1.2rem;
      color: var(--secondary-text);
      margin-bottom: 2.5rem;
      line-height: 1.6;
    }
    
    .hero-cta {
      font-size: 1.1rem;
      padding: 15px 30px;
    }
    
    .hero-cta i {
      margin-right: 8px;
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-description {
        font-size: 1rem;
      }
    }
  `]
})
export class HeroComponent {
  private translationService = inject(TranslationService);
  
  translate(key: string): string {
    return this.translationService.translate(key);
  }
}