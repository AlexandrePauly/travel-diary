import { Component, OnInit, Input } from '@angular/core';
import Swiper from 'swiper';

// Modèles
import { TravelCard } from '../../../models/travel-card.model';

// Services
import { ChangeLanguageService } from '../../../services/change-language/change-language.service';
import { LoginLogoutService } from '../../../services/login-logout/login-logout.service';

@Component({
  selector: 'app-vertical-caroussel',
  templateUrl: './vertical-caroussel.component.html',
  styleUrl: './vertical-caroussel.component.css'
})
export class VerticalCarousselComponent implements OnInit {
  @Input() caroussel!: TravelCard[]; // Initialisation du caroussel

  constructor(public languageService: ChangeLanguageService, public logService: LoginLogoutService) {
    
  }

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
    
    // Initialisation du slider
    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      grabCursor: true,
      speed: 800,
      loop: false,
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      mousewheel: {
        invert: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Responsive breakpoints
      breakpoints: {
        1000: {
          spaceBetween: 20,
        },
        0: {
          spaceBetween: 10,
        },
      }
    });
  }
}
