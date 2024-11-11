import { Component, OnInit, Input } from '@angular/core';

// Modèles
import { Caroussel } from '../../../models/caroussel.model'

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.css',
})
export class CarousselComponent implements OnInit {  
  @Input() caroussel!: Caroussel[]; // Initialisation du caroussel

  ngOnInit(): void {
    // Fonction pour réorganiser un tableau de manière aléatoire
    function shuffleArray(array: any[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Appel de la fonction pour réorganiser les éléments du caroussel
    shuffleArray(this.caroussel);
  }

}