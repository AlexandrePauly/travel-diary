import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models
import { Caroussel } from '../../../models/caroussel.model';
import { TravelPage } from '../../../models/travel-page.model';
import { TravelTab } from '../../../models/travel-tab.model';

// Services
import { ShowCarousselService } from '../../../services/show-caroussel/show-caroussel.service';

@Component({
  selector: 'app-page-travel',
  templateUrl: './page-travel.component.html',
  styleUrl: './page-travel.component.css'
})
export class PageTravelComponent implements OnInit {
  // Initialisation de variables
  activeTab: string = 'Mountain';                         // Tableau actif par défaut
  activeMenu: string = 'Overview';                        // Onglet actif par défaut
  carousselAnimation: string = "app-carrousel-animating"; // Animation pour faire apparaître/cacher le caroussel
  carousselContent: any;                                  // Contenu du caroussel 
  startDate!: string;                                     // Date de début du voyage
  endDate!: string;                                       // Date de fin du voyage

  // TODO - Faire des requêtes bdd 
  travelsPages: TravelPage[] = []; // Liste des pages de voyages
  dataTravel!: any;                // Informations pour la page de voyages

  constructor(private elementRef: ElementRef, private renderer: Renderer2, public showCarousselService: ShowCarousselService, private activatedRoute : ActivatedRoute) {
    this.travelsPages.push(
      new TravelPage(
        'New Zealand',
        'Nature Explore',
        new Date('2022/03/13'),
        new Date('2022/05/27'),
        [
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          'https://source.unsplash.com/Z8dtTatMVMw',
          'https://swiperjs.com/demos/images/nature-2.jpg',
        ],
        [
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
            'https://swiperjs.com/demos/images/nature-5.jpg',
            'Machu Pichu',
            'Peru',
            'Adventure is never far away',
          )
        ],
        [
          new TravelTab(
            "Mountain",
            "Things you should know about New Zealand's mountain",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis quasi incidunt, deserunt asperiores aut impedit. Optio necessitatibus illo eligendi dolores perspiciatis sit deleniti, ducimus harum nesciunt, tenetur possimus qui.",
            "Galerie d'images de montagnes",
            [
              new Caroussel(
                'https://source.unsplash.com/Z8dtTatMVMw',
                'test',
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
              )
            ],
            "map mountain title",
            "maps mountain desc"
          ),
          new TravelTab(
            "River",
            "Things you should know about New Zealand's river",
            "Quam quasi unde rerum voluptatem amet, odio laborum laudantium molestiae hic, assumenda dolore delectus nisi provident maxime, reprehenderit iste earum. At, rem?",
            "Galerie d'images de rivières",
            [
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
              )
            ],
            "map River title",
            "maps River desc"
          ),
          new TravelTab(
            "Ocean",
            "Things you should know about New Zealand's ocean",
            "Itaque facere explicabo velit quo impedit quis veniam eveniet porro nobis ratione eaque omnis fuga nisi quae voluptatem, illo maiores reiciendis odit.",
            "Galerie d'images d'océans",
            [
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
              )
            ],
            "map Ocean title",
            "maps Ocean desc"
          )
        ]
      )
    );
    
    this.dataTravel = this.travelsPages[0];
    this.carousselContent = this.dataTravel.caroussel;

    // Options de formatage
    const options = { day: 'numeric', month: 'long', year: 'numeric' } as Intl.DateTimeFormatOptions;

    // Formatage de la date
    const dateFormatter = new Intl.DateTimeFormat('fr-FR', options);
    this.startDate = dateFormatter.format(this.dataTravel.startDate);
    this.endDate = dateFormatter.format(this.dataTravel.endDate);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data) => {
        // console.log(data);
      }
    )
  }

  // Fonction pour changer les éléments du menu
  changeMenu(elt: string, bool: boolean, index: number){
    // Si il faut changer de tableau
    if (bool){
      // Mise à jour de variables
      this.activeTab = elt;
      this.activeMenu = "Overview";

      // Parcours des tableaux pour afficher le bon
      for (let i in this.dataTravel.tab) {
        const temp = ".tab-info-travel-" + (Number(i)+1);
        const element = this.elementRef.nativeElement.querySelector(temp);        
        
        if(Number(i) != index){
          element.style.display = "none";
        }
        else{
          element.style.display = "grid";
        }
      }
      
      // Élément du menu à afficher et animer
      const activeElt = this.elementRef.nativeElement.querySelector('.elt1');
        
      activeElt.style.display = "grid";
      activeElt.animate([
        {
          opacity: "0",
          offset: 0
        },
        {
          opacity: "1",
          offset: 1
        }
      ],{				 
        duration: 1000,
        easing: 'linear',
        delay: 0,
        iterations: 1,
        direction: 'normal',
        fill: 'none'
      });

      // Éléments du menu à cacher
      this.elementRef.nativeElement.querySelector('.elt2').style.display = "none";
      this.elementRef.nativeElement.querySelector('.elt3').style.display = "none";
    }
    // Sinon si il faut changer d'onglet sur un tableau
    else{
      const temp = ".tab-info-travel-" + (index + 1);
      if (elt === "Overview"){
        // Élément du menu à afficher et animer
        const activeElt = this.elementRef.nativeElement.querySelector(temp + ' .elt1');
        activeElt.style.display = "grid";
        activeElt.animate([
          {
            opacity: "0",
            offset: 0
          },
          {
            opacity: "1",
            offset: 1
          }
        ],{				 
          duration: 1000,
          easing: 'linear',
          delay: 0,
          iterations: 1,
          direction: 'normal',
          fill: 'none'
        });

        // Éléments du menu à cacher
        this.elementRef.nativeElement.querySelector(temp + ' .elt2').style.display = "none";
        this.elementRef.nativeElement.querySelector(temp + ' .elt3').style.display = "none";
      }
      else if (elt === "Gallery"){
        // Élément du menu à afficher et animer
        const activeElt = this.elementRef.nativeElement.querySelector(temp + ' .elt2');
        activeElt.style.width = this.elementRef.nativeElement.querySelector(temp + ' .elt1').offsetWidth;
        activeElt.style.display = "grid";
        activeElt.animate([
          {
            opacity: "0",
            offset: 0
          },
          {
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

        // Éléments du menu à cacher
        this.elementRef.nativeElement.querySelector(temp + ' .elt1').style.display = "none";
        this.elementRef.nativeElement.querySelector(temp + ' .elt3').style.display = "none";
      }
      else if (elt === "Maps"){
        // Élément du menu à afficher et animer
        const activeElt = this.elementRef.nativeElement.querySelector(temp + ' .elt3');
        activeElt.style.display = "grid";
        activeElt.animate([
          {
            opacity: "0",
            offset: 0
          },
          {
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

        // Éléments du menu à cacher
        this.elementRef.nativeElement.querySelector(temp + ' .elt1').style.display = "none";
        this.elementRef.nativeElement.querySelector(temp + ' .elt2').style.display = "none";
      }

      this.activeMenu = elt;
    }
  }

  // Fonction pour afficher et cacher le caroussel
  showCaroussel(content: any){
    // Si le caroussel n'est pas affiché, on l'affiche avec une animation
    if (!this.showCarousselService.isCarouselOpen()){
      // Mise à jour de variables
      this.showCarousselService.showCarousel()              // Affichage du caroussel
      this.carousselAnimation = "app-carrousel-animating";  // Animation pour afficher le caroussel
      this.carousselContent = content;                      // Contenu du caroussel
      
      this.elementRef.nativeElement.querySelector('app-caroussel').style.zindex = 2;
      this.elementRef.nativeElement.querySelector('app-header').style.display = "none"; // Élément caché pour ne pas gache l'animation d'apparition du caroussel

      setTimeout(() => {
        this.carousselAnimation = "app-carrousel-animating";
      }, 500);
    }
    // Sinon, on le cache avec une animation
    else{
      // Mise à jour de variables
      this.carousselAnimation = "app-close-animating"; // Animation pour cacher le caroussel

      setTimeout(() => {
        this.showCarousselService.hideCarousel()
        this.elementRef.nativeElement.querySelector('app-caroussel').style.zindex = -100;
      }, 500);

      this.elementRef.nativeElement.querySelector('app-header').style.display = "flex"; // Élément réaffiché
    }
  }
}
