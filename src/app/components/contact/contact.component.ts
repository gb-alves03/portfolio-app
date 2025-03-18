import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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