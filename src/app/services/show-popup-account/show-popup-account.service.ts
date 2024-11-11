import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowPopupAccountService {
  // Initialisation de variables
  private visibility: boolean = false; // Visibilité de la popup

  // Fonction pour afficher la popup
  showPopup() {
    this.visibility = true;
  }

  // Fonction pour cacher la popup
  hidePopup() {
    this.visibility = false;
  }

  // Fonction pour connaître la visibilié de la popup
  isVisible() {
    return this.visibility;
  }
}
