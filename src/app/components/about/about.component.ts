import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <h2 class="section-title">{{ translate('about.title') }}</h2>
        <p class="section-description">
          {{ translate('about.description') }}
        </p>
        
        <div class="about-content">
          <div class="about-text">
            <h3>{{ translate('about.getToKnow') }}</h3>
            <p>
              {{ translate('about.bio') }}
            </p>
            <div class= "about-responsabilities">
              <h4>{{ translate('about.ul')}}</h4>
              <ul>
                <li>
                  <p>{{translate('about.responsibility1')}}</p>
                </li>
                <li>
                  <p>{{translate('about.responsibility2')}}</p>
                </li>
                <li>
                  <p>{{translate('about.responsibility3')}}</p>
                </li>
                <li>
                  <p>{{translate('about.responsibility4')}}</p>
                </li>
              </ul>  
            </div>
            <p>
              {{ translate('about.openToWork') }}
            </p>
            <a href="#contact" class="btn">{{ translate('about.contact') }}</a>
          </div>
          
          <div class="about-image">
            <img src="/assets/img/profile-picture.jpg" alt="Profile Image" />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background-color: var(--bg-color);
    }
    
    .section-description {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 60px;
      color: var(--secondary-text);
      font-size: 1.1rem;
    }
    
    .about-content {
      display: flex;
      gap: 50px;
      align-items: center;
    }
    
    .about-text {
      flex: 1;
    }
    
    .about-text h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: var(--primary-color);
    }
    
    .about-text p {
      margin-bottom: 20px;
      line-height: 1.6;
      color: var(--secondary-text);
    }
    
    .about-image {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    
    .about-image img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    @media (max-width: 768px) {
      .about-content {
        flex-direction: column-reverse;
      }
      
      .about-image {
        margin-bottom: 30px;
      }
    }
  `]
})
export class AboutComponent {
  private translationService = inject(TranslationService);
  
  translate(key: string): string {
    return this.translationService.translate(key);
  }
}