import { Component, OnInit, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent implements OnInit {
  @Input() caroussel!: string[]; // Initialisation du caroussel

  ngOnInit(): void {    
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 0,
      centeredSlides: true,
      allowTouchMove: false,
      speed: 800,
      loop: true,
      simulateTouch: false,
      slidesPerView: 1,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      }
    });
  }
}
