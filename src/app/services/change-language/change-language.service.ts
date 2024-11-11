import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {
  // Initialisation de variables
  private activeLanguage: string = "fr"; // Language actuelle sur l'application

  // Fonction pour changer la langue
  changeLanguage(language: string){
    this.activeLanguage = language;
    localStorage.setItem('language', language);
  }

  // Fonction pour savoir si le caroussel est ouvert ou non
  activedLanguage(): any {
    if (localStorage.getItem('language')){
      return localStorage.getItem('language');
    }
    else{
      return this.activeLanguage;
    }
  }
}
