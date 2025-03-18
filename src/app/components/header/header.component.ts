import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
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