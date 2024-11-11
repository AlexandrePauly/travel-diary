import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { TravelCard } from '../../../models/travel-card.model';

// Services
import { ChangeLanguageService } from '../../../services/change-language/change-language.service';
import { LoginLogoutService } from '../../../services/login-logout/login-logout.service';
import { ShowPopupAccountService } from '../../../services/show-popup-account/show-popup-account.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  // Initialisation de variables
  travels: TravelCard[] = []; // Liste des voyages
  mapTypes!: any;             // Menu déroulant des options de la map

  constructor(public router: Router, public languageService: ChangeLanguageService, public logService: LoginLogoutService, public showPopupService: ShowPopupAccountService) {
    
  }

  ngOnInit() {
    this.travels.push(
      new TravelCard(
        'Taïwan',
        'Lorem ipsum dolor',
        new Date('2024/02/04'),
        new Date('2024/06/23'),
        '../../../assets/img/flag/taiwan.png',
        'taiwan',
        '../../../assets/img/travel/taiwan-3.jpg'
      ),
      new TravelCard(
        'Tokyo',
        'Lorem ipsum dolor',
        new Date('2024/04/04'),
        new Date('2024/04/09'),
        '../../../assets/img/flag/japon.png',
        'japon',
        '../../../assets/img/travel/japon-2.jpg'
      ),
      new TravelCard(
        'Amsterdam',
        'Lorem ipsum dolor',
        new Date('2024/02/01'),
        new Date('2024/02/04'),
        '../../../assets/img/flag/pays-bas.png',
        'amsterdam',
        '../../../assets/img/travel/japon-3.jpg'
      ),
      new TravelCard(
        'Palma de Majorque',
        'Lorem ipsum dolor',
        new Date('2024/02/01'),
        new Date('2024/02/04'),
        '../../../assets/img/flag/espagne.png',
        'palma',
        '../../../assets/img/travel/japon-4.jpg'
      )
    );

    if (this.languageService.activedLanguage() === 'fr') {
      this.mapTypes = [{
        key: 'roadmap',
        name: 'Carte routière',
      }, {
        key: 'satellite',
        name: 'Carte satellite',
      }, {
        key: 'hybrid',
        name: 'Carte hybride',
      }];
    }
    else {
      this.mapTypes = [{
        key: 'roadmap',
        name: 'Road Map',
      }, {
        key: 'satellite',
        name: 'Satellite Map',
      }, {
        key: 'hybrid',
        name: 'Hybrid Map',
      }];
    }
  }

  // Fonction pour rediriger pour la page travel
  goOnTravel(link: string) {
    this.router.navigate(['/travel/' + link]);
  }

  // Fonction pour calculer le nombre de jours entre deux dates
  calculateDateDifference(startDate: Date, endDate: Date): number {
    // Calcule de la différence en millisecondes
    const millisecondsDifference = endDate.getTime() - startDate.getTime();

    // Convertion de la différence en jours
    const result = Math.ceil(millisecondsDifference / (1000 * 60 * 60 * 24));

    return result;
  }
}