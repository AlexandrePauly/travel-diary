import { Component, OnInit, Input } from '@angular/core';
import { TravelCard } from '../../../models/travel-card.model'

@Component({
  selector: 'app-home-destination',
  templateUrl: './home-destination.component.html',
  styleUrl: './home-destination.component.css'
})
export class HomeDestinationComponent implements OnInit {
  @Input() travels!: TravelCard[]; // Initialisation de la liste des voyages

  ngOnInit(): void {
    // Fonction pour réorganiser un tableau de manière aléatoire
    function shuffleArray(array: any[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Appel de la fonction pour réorganiser les éléments de la liste des voyages
    shuffleArray(this.travels);
  }
}
