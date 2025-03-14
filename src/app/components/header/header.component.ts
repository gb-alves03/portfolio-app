import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="scrolled">
      <div class="container header-content">
        <div class="logo">
          <span class="name">Gabriel Henrique Alves</span>
        </div>
        
        <nav class="nav-menu" [class.active]="mobileMenuOpen">
          <ul>
            <li><a href="#home" (click)="closeMobileMenu()">{{ translate('nav.home') }}</a></li>
            <li><a href="#about" (click)="closeMobileMenu()">{{ translate('nav.about') }}</a></li>
            <li><a href="#skills" (click)="closeMobileMenu()">{{ translate('nav.skills') }}</a></li>
            <li><a href="#projects" (click)="closeMobileMenu()">{{ translate('nav.projects') }}</a></li>
            <li><a href="#contact" (click)="closeMobileMenu()">{{ translate('nav.contact') }}</a></li>
          </ul>
          
          <div class="mobile-controls">
            <button class="theme-toggle" (click)="toggleTheme()">
              <i [class]="isDarkTheme ? 'fas fa-sun' : 'fas fa-moon'"></i>
              {{ isDarkTheme ? translate('theme.light') : translate('theme.dark') }}
            </button>
            
            <button class="lang-toggle" (click)="toggleLanguage()">
              {{ currentLang === 'en-US' ? 'PT-BR' : 'EN-US' }}
            </button>
          </div>
        </nav>
        
        <div class="desktop-controls">
          <button class="theme-toggle" (click)="toggleTheme()">
            <i [class]="isDarkTheme ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
          
          <button class="lang-toggle" (click)="toggleLanguage()">
            {{ currentLang === 'en-US' ? 'PT-BR' : 'EN-US' }}
          </button>
        </div>
        
        <button class="mobile-menu-btn" (click)="toggleMobileMenu()" [attr.aria-expanded]="mobileMenuOpen">
          <i [class]="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>
    </header>
    
    <div class="mobile-menu-overlay" *ngIf="mobileMenuOpen" (click)="closeMobileMenu()"></div>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: var(--header-bg);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      transition: all 0.3s ease;
    }
    
    .header.scrolled {
      padding: 5px 0;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }
    
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 1001;
    }
    
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .name {
      font-weight: 600;
      font-size: 1.2rem;
    }
    
    .nav-menu ul {
      display: flex;
      list-style: none;
      gap: 30px;
    }
    
    .nav-menu a {
      font-weight: 500;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .nav-menu a:hover {
      color: var(--primary-color);
    }
    
    .nav-menu a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width 0.3s ease;
    }
    
    .nav-menu a:hover::after {
      width: 100%;
    }
    
    .desktop-controls {
      display: flex;
      gap: 15px;
    }
    
    .mobile-controls {
      display: none;
    }
    
    .theme-toggle, .lang-toggle {
      background: none;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      padding: 8px 12px;
      color: var(--text-color);
      transition: all 0.3s ease;
    }
    
    .theme-toggle:hover, .lang-toggle:hover {
      background-color: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }
    
    .mobile-menu-btn {
      display: none;
      background: none;
      font-size: 1.5rem;
      color: var(--text-color);
      z-index: 1001;
      cursor: pointer;
    }
    
    .mobile-menu-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
      display: none;
    }
    
    @media (max-width: 768px) {
      .desktop-controls {
        display: none;
      }
      
      .mobile-menu-btn {
        display: block;
      }
      
      .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 75%;
        max-width: 300px;
        height: 100vh;
        background-color: var(--card-bg);
        padding: 80px 20px 40px;
        flex-direction: column;
        z-index: 1000;
        transition: right 0.3s ease;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
      }
      
      .nav-menu.active {
        right: 0;
      }
      
      .nav-menu ul {
        flex-direction: column;
        gap: 20px;
      }
      
      .nav-menu li {
        width: 100%;
      }
      
      .nav-menu a {
        display: block;
        padding: 10px 0;
        font-size: 1.2rem;
      }
      
      .mobile-controls {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 30px;
      }
      
      .mobile-controls button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 12px;
      }
      
      .mobile-menu-overlay {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  private translationService = inject(TranslationService);
  private themeService = inject(ThemeService);
  
  currentLang = 'en-US';
  isDarkTheme = false;
  mobileMenuOpen = false;
  scrolled = false;
  
  constructor() {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
    
    this.themeService.theme$.subscribe(theme => {
      this.isDarkTheme = theme === 'dark';
    });
  }
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
  
  translate(key: string): string {
    return this.translationService.translate(key);
  }
  
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  
  toggleLanguage() {
    this.translationService.toggleLanguage();
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }
}