import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'pt-BR' | 'en-US';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<Language>('en-US');
  currentLang$ = this.currentLangSubject.asObservable();
  
  private translations: Record<string, Record<Language, string>> = {
    'nav.home': {
      'en-US': 'HOME',
      'pt-BR': 'INÍCIO'
    },
    'nav.about': {
      'en-US': 'ABOUT',
      'pt-BR': 'SOBRE'
    },
    'nav.skills': {
      'en-US': 'SKILLS',
      'pt-BR': 'HABILIDADES'
    },
    'nav.projects': {
      'en-US': 'PROJECTS',
      'pt-BR': 'PROJETOS'
    },
    'nav.contact': {
      'en-US': 'CONTACT',
      'pt-BR': 'CONTATO'
    },
    'hero.greeting': {
      'en-US': 'HEY, I\'M',
      'pt-BR': 'OLÁ, EU SOU'
    },
    'hero.description': {
      'en-US': 'Fullstack Software Engineer with a passion for Backend Java development.',
      'pt-BR': 'Engenheiro de Software Fullstack apaixonado pelo desenvolvimento Backend Java.'
    },
    'hero.downloadCV': {
      'en-US': 'DOWNLOAD CV',
      'pt-BR': 'BAIXAR CURRÍCULO'
    },
    'theme.dark': {
      'en-US': 'Dark Mode',
      'pt-BR': 'Modo Escuro'
    },
    'theme.light': {
      'en-US': 'Light Mode',
      'pt-BR': 'Modo Claro'
    },
    'about.title': {
      'en-US': 'ABOUT ME',
      'pt-BR': 'SOBRE MIM'
    },
    'about.description': {
      'en-US': 'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology',
      'pt-BR': 'Aqui você encontrará mais informações sobre mim, o que eu faço e minhas habilidades atuais principalmente em termos de programação e tecnologia'
    },
    'about.getToKnow': {
      'en-US': 'Get to know me!',
      'pt-BR': 'Conheça-me!'
    },
    'about.bio': {
      'en-US': 'I\'m a Fullstack Software Engineer at Banco Santander and I\'m currently working on a global project focused on developing a new global card processor for the bank\'s debit line.',
      'pt-BR': 'Sou um Engenheiro de Software Fullstack no Banco Santander e atualmente atuo em um projeto global que tem como foco o desenvolvimento de uma nova processadora de cartões global na linha de débito do banco.'
    },
    'about.ul': {
      'en-US': 'Main Responsabilities',
      'pt-BR': 'Principais Responsabilidades'
    },
    'about.responsibility1': {
      'en-US': 'Development and maintenance of microservices to process transactions and integrate different banking systems.',
      'pt-BR': 'Desenvolvimento e manutenção de microsserviços para processar transações e integrar diferentes sistemas bancários.'
    },
    'about.responsibility2': {
      'en-US': 'Implementation of middleware to optimize communication between microservices and improve the consumption of APIs by clients.',
      'pt-BR': 'Implementação de middlewares para otimizar a comunicação entre microsserviços e melhorar o consumo das APIs pelos clientes.'
    },
    'about.responsibility3': {
      'en-US': 'Construction and evolution of micro-frontends in Angular 16 for the journeys used in service channels.',
      'pt-BR': 'Construção e evolução de micro-frontends em Angular 16 para as jornadas utilizadas nos canais de atendimento.'
    },
    'about.responsibility4': {
      'en-US': 'Migration of legacy applications from Angular 8 to Angular 16, ensuring better performance and compatibility',
      'pt-BR': 'Migração de aplicações legadas de Angular 8 para Angular 16, garantindo melhor performance e compatibilidade'
    },
    'about.openToWork': {
      'en-US': 'I\'m open to Job opportunities to contribute in open-source projects. If you have a good opportunity that matches my skills and experience then don\'t hesitate to contact me.',
      'pt-BR': 'Estou aberto a oportunidades para contribuir em projetos open-source. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em entrar em contato comigo.'
    },
    'about.contact': {
      'en-US': 'CONTACT',
      'pt-BR': 'CONTATO'
    },
    'skills.title': {
      'en-US': 'MY SKILLS',
      'pt-BR': 'MINHAS HABILIDADES'
    },
    'skills.description': {
      'en-US': 'Here you can see the skills I work with',
      'pt-BR': 'Aqui você pode ver as habilidades com as quais trabalho'
    },
    'skills.hover': {
      'en-US': 'Hover over a skill to see details',
      'pt-BR': 'Passe o cursor do mouse no card para ler'
    },
    'projects.title': {
      'en-US': 'PROJECTS',
      'pt-BR': 'PROJETOS'
    },
    'projects.description': {
      'en-US': 'Here you will find some of the personal and client projects that I created',
      'pt-BR': 'Aqui você encontrará alguns dos projetos pessoais e de clientes que criei'
    },
    'contact.title': {
      'en-US': 'CONTACT',
      'pt-BR': 'CONTATO'
    },
    'contact.description': {
      'en-US': 'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible',
      'pt-BR': 'Sinta-se à vontade para entrar em contato comigo preenchendo o formulário abaixo e eu retornarei o mais breve possível'
    },
    'contact.name': {
      'en-US': 'Name',
      'pt-BR': 'Nome'
    },
    'contact.email': {
      'en-US': 'Email',
      'pt-BR': 'Email'
    },
    'contact.message': {
      'en-US': 'Message',
      'pt-BR': 'Mensagem'
    },
    'contact.submit': {
      'en-US': 'SUBMIT',
      'pt-BR': 'ENVIAR'
    },
    'footer.copyright': {
      'en-US': 'Copyright © 2025. All rights reserved.',
      'pt-BR': 'Copyright © 2025. Todos os direitos reservados.'
    }
  };

  constructor() {}

  init() {
    // Check browser language or stored preference
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en-US' || savedLang === 'pt-BR')) {
      this.setLanguage(savedLang);
    } else {
      // Default to browser language if available and supported
      const browserLang = navigator.language;
      if (browserLang.startsWith('pt')) {
        this.setLanguage('pt-BR');
      } else {
        this.setLanguage('en-US');
      }
    }
  }

  setLanguage(lang: Language) {
    localStorage.setItem('language', lang);
    this.currentLangSubject.next(lang);
  }

  toggleLanguage() {
    const currentLang = this.currentLangSubject.value;
    const newLang = currentLang === 'en-US' ? 'pt-BR' : 'en-US';
    this.setLanguage(newLang);
  }

  translate(key: string): string {
    const currentLang = this.currentLangSubject.value;
    return this.translations[key]?.[currentLang] || key;
  }
}