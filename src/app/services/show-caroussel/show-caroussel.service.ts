import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowCarousselService {
  // Initialisation de variables
  private isOpen: boolean = false; // Visibilité du caroussel

  // Fonction pour afficher le caroussel
  showCarousel() {
    this.isOpen = true;
  }

  // Fonction pour cacher le caroussel
  hideCarousel() {
    this.isOpen = false;
  }

  // Fonction pour savoir si le caroussel est ouvert ou non
  isCarouselOpen(): boolean {
    return this.isOpen;
  }
}
