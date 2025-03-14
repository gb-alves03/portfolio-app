import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title">{{ translate('contact.title') }}</h2>
        <p class="section-description">
          {{ translate('contact.description') }}
        </p>
        
        <div class="contact-form-container">
          <form class="contact-form" (submit)="onSubmit($event)">
            <div class="form-group">
              <label for="name">{{ translate('contact.name') }}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                [(ngModel)]="formData.name" 
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email">{{ translate('contact.email') }}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                [(ngModel)]="formData.email" 
                required
              />
            </div>
            
            <div class="form-group">
              <label for="message">{{ translate('contact.message') }}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                [(ngModel)]="formData.message" 
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-full">
              {{ translate('contact.submit') }}
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background-color: var(--card-bg);
    }
    
    .contact-form-container {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .contact-form {
      background-color: var(--bg-color);
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }
    
    .form-group {
      margin-bottom: 25px;
    }
    
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }
    
    input, textarea {
      width: 100%;
      padding: 12px 15px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      background-color: var(--card-bg);
      color: var(--text-color);
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    input:focus, textarea:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(124, 77, 255, 0.2);
      outline: none;
    }
    
    .btn-full {
      width: 100%;
      padding: 15px;
      font-size: 1.1rem;
    }
  `]
})
export class ContactComponent {
  private translationService = inject(TranslationService);
  
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  translate(key: string): string {
    return this.translationService.translate(key);
  }
  
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted:', this.formData);
    // Here you would typically send the form data to a backend service
    alert('Form submitted! This is just a demo.');
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}