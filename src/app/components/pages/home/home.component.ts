import { Component, OnInit, ElementRef } from '@angular/core';

// Modèles
import { TravelCard } from '../../../models/travel-card.model';
import { Caroussel } from '../../../models/caroussel.model';
import { TravelPage } from '../../../models/travel-page.model';
import { TravelTab } from '../../../models/travel-tab.model';

// Services
import { ChangeLanguageService } from '../../../services/change-language/change-language.service';
import { LoginLogoutService } from '../../../services/login-logout/login-logout.service';
import { ShowCarousselService } from '../../../services/show-caroussel/show-caroussel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // Initialisation de variables
  travelsCards: TravelCard[] = [];                        // Liste des voyages
  caroussel: Caroussel[] = [];                            // Caroussel d'images
  travelsPages: TravelPage[] = [];                        // Liste des pages de voyages
  travelsTabs: TravelTab[] = [];                          // Tableau d'une page de voyages
  carousselVisibility: boolean = false;                   // Visibilité du caroussel
  carousselAnimation: string = "app-carrousel-animating"; // Animation pour faire apparaître/cacher le caroussel 

  constructor(private elementRef: ElementRef, public showCarousselService: ShowCarousselService, public languageService: ChangeLanguageService, public logService: LoginLogoutService) {}

  ngOnInit() {
    this.travelsCards.push(
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

    this.caroussel.push(
      new Caroussel(
        'https://source.unsplash.com/Z8dtTatMVMw',
        'Machu Pichu',
        'Peru',
        'Adventure is never far away',
      ),
      new Caroussel(
        'https://swiperjs.com/demos/images/nature-2.jpg',
        'Machu Pichu',
        'Peru',
        'Adventure is never far away',
      ),
      new Caroussel(
        'https://swiperjs.com/demos/images/nature-3.jpg',
        'Machu Pichu',
        'Peru',
        'Adventure is never far away',
      ),
      new Caroussel(
        'https://swiperjs.com/demos/images/nature-4.jpg',
        'Machu Pichu',
        'Peru',
        'Adventure is never far away',
      ),
      new Caroussel(
        'https://swiperjs.com/demos/images/nature-5.jpg',
        'Machu Pichu',
        'Peru',
        'Adventure is never far away',
      ),
      new Caroussel(
        'https://source.unsplash.com/9dmycbFE7mQ',
        'Machu Pichu',
        'Peru',
        'Adventure is never far away',
      ),
      new Caroussel(
        'https://source.unsplash.com/m7K4KzL5aQ8',
        'Machu Pichu',
        'Peru',
        'Adventure is never far away',
      ),
      new Caroussel(
        'https://swiperjs.com/demos/images/nature-8.jpg',
        'Machu Pichu',
        'Peru',
        'Adventure is never far away',
      ),
      new Caroussel(
        'https://swiperjs.com/demos/images/nature-10.jpg',
        'Machu Pichu',
        'Peru',
        'Adventure is never far away',
      ),
    );

    // this.travelsTabs.push(
    //   new TravelTab(
    //     "Mountain",
    //     "Things you should know about New Zealand's river",
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis quasi incidunt, deserunt asperiores aut impedit. Optio necessitatibus illo eligendi dolores perspiciatis sit deleniti, ducimus harum nesciunt, tenetur possimus qui."
    //   ),
    //   new TravelTab(
    //     "River",
    //     "test2",
    //     "Quam quasi unde rerum voluptatem amet, odio laborum laudantium molestiae hic, assumenda dolore delectus nisi provident maxime, reprehenderit iste earum. At, rem?"
    //   ),
    //   new TravelTab(
    //     "Ocean",
    //     "Test3",
    //     "Itaque facere explicabo velit quo impedit quis veniam eveniet porro nobis ratione eaque omnis fuga nisi quae voluptatem, illo maiores reiciendis odit."
    //   )
    // );

    // this.travelsPages.push(
    //   new TravelPage(
    //     'New Zealand',
    //     'Nature Explore',
    //     new Date('2022/03/13'),
    //     new Date('2022/05/27'),
    //     'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     this.caroussel,
    //     [
    //       new TravelTab(
    //         "Mountain",
    //         "Things you should know about New Zealand's river",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis quasi incidunt, deserunt asperiores aut impedit. Optio necessitatibus illo eligendi dolores perspiciatis sit deleniti, ducimus harum nesciunt, tenetur possimus qui."
    //       ),
    //       new TravelTab(
    //         "River",
    //         "test2",
    //         "Quam quasi unde rerum voluptatem amet, odio laborum laudantium molestiae hic, assumenda dolore delectus nisi provident maxime, reprehenderit iste earum. At, rem?"
    //       ),
    //       new TravelTab(
    //         "Ocean",
    //         "Test3",
    //         "Itaque facere explicabo velit quo impedit quis veniam eveniet porro nobis ratione eaque omnis fuga nisi quae voluptatem, illo maiores reiciendis odit."
    //       )
    //     ]
    //   )
    // );
    
    this.attachLoadEvent();
  }

  // Fonction pour afficher et cacher le caroussel
  showCaroussel(){
    // Si le caroussel n'est pas affiché, on l'affiche avec une animation
    if (!this.showCarousselService.isCarouselOpen()){
      // Mise à jour de variables
      this.showCarousselService.showCarousel()              // Affichage du caroussel
      this.carousselAnimation = "app-carrousel-animating";  // Animation pour afficher le caroussel
      this.elementRef.nativeElement.querySelector('app-caroussel').style.zindex = 0;

      setTimeout(() => {
        this.carousselAnimation = "app-carrousel-animating";
      }, 500);
    }
    // Sinon, on le cache avec une animation
    else{
      // Mise à jour de variables
      this.carousselAnimation = "app-close-animating"; // Animation de pour cacher le caroussel

      setTimeout(() => {
        this.showCarousselService.hideCarousel()
        this.elementRef.nativeElement.querySelector('app-caroussel').style.zindex = -100;
      }, 500);
    }
  }

  onPageLoad(): void {
    const text_container = this.elementRef.nativeElement.querySelector('.text-container');

    text_container.style.display = "block";
    text_container.animate([
      {
        opacity: "0",
        offset: 0
      },
      {
        opacity: "1",
        offset: 1
      }
    ],{				 
      duration: 800,
      easing: 'linear',
      delay: 0,
      iterations: 1,
      direction: 'normal',
      fill: 'none'
    });

    setTimeout(() => {
      const header = this.elementRef.nativeElement.querySelector('app-header');

      header.style.display = "block";
      header.animate([
        {
          transform: "translateY(-100px)",
          opacity: "0",
          offset: 0
        },
        {
          transform: "translateY(0)",
          opacity: "1",
          offset: 1
        }
      ],{				 
        duration: 500,
        easing: 'linear',
        delay: 0,
        iterations: 1,
        direction: 'normal',
        fill: 'none'
      });
      
      setTimeout(() => {
        const caroussel = this.elementRef.nativeElement.querySelector('app-vertical-caroussel');

        caroussel.style.display = "block";
        caroussel.animate([
          {
            transform: "translateY(100vh)",
            opacity: "0",
            offset: 0
          },
          {
            transform: "translateY(0)",
            opacity: "1",
            offset: 1
          }
        ],{				 
          duration: 800,
          easing: 'linear',
          delay: 0,
          iterations: 1,
          direction: 'normal',
          fill: 'none'
        });
      }, 1000);
    }, 1000);
  }

  // Attacher l'événement load à l'objet window
  attachLoadEvent(): void {
    // window.addEventListener("load", () => this.onPageLoad());
  }
}