import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="copyright">
            {{ translate('footer.copyright') }}
          </p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/in/gabriel-henrique-alves-dev/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/gb-alves03" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="#" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--header-bg);
      padding: 30px 0;
      border-top: 1px solid var(--border-color);
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .copyright {
      color: var(--secondary-text);
    }
    
    .footer-social {
      display: flex;
      gap: 20px;
    }
    
    .footer-social a {
      color: var(--secondary-text);
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }
    
    .footer-social a:hover {
      color: var(--primary-color);
      transform: translateY(-3px);
    }
    
    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        gap: 20px;
        text-align: center;
      }
      
      .footer {
        padding-bottom: 20px;
      }
    }
  `]
})
export class FooterComponent {
  private translationService = inject(TranslationService);
  
  translate(key: string): string {
    return this.translationService.translate(key);
  }
}