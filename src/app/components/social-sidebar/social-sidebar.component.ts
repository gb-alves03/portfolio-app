import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/gabriel-henrique-alves-dev/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/gb-alves03" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://www.instagram.com/gb_alves6/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    </div>
  `,
  styles: [`
    .social-icons {
      position: fixed;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      gap: 20px;
      z-index: 90;
    }
    
    .social-icons a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: var(--card-bg);
      border-radius: 50%;
      color: var(--text-color);
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .social-icons a:hover {
      color: var(--primary-color);
      transform: translateY(-3px);
    }
    
    @media (max-width: 768px) {
      .social-icons {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: auto;
        transform: none;
        flex-direction: row;
        justify-content: center;
        background-color: var(--header-bg);
        padding: 10px 0;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      }
      
      .social-icons a {
        width: 36px;
        height: 36px;
        font-size: 0.9rem;
      }
      
      .social-icons a:hover {
        transform: translateY(-2px);
      }
    }
  `]
})
export class SocialSidebarComponent {}