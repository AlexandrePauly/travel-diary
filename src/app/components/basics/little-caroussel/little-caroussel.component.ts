import { Component, OnInit, Input } from '@angular/core';
import Swiper from 'swiper';

// Modèles
import { Caroussel } from '../../../models/caroussel.model'

@Component({
  selector: 'app-little-caroussel',
  templateUrl: './little-caroussel.component.html',
  styleUrl: './little-caroussel.component.css'
})
export class LittleCarousselComponent implements OnInit {
  @Input() caroussel!: Caroussel[]; // Initialisation du caroussel

  ngOnInit(): void {    
    var swiper = new Swiper(".swiper", {
      grabCursor: true,
      speed: 400,
      mousewheel: {
        invert: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        900: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }
}
