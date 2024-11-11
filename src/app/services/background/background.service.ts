import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  tabBg = [
    "assets/img/form-log/bg1.jpg",
    "assets/img/form-log/bg2.jpg",
    "assets/img/form-log/bg3.jpg",
    "assets/img/form-log/bg4.jpg",
    "assets/img/form-log/bg5.jpg",
    "assets/img/form-log/bg6.jpg",
    "assets/img/form-log/bg7.jpg",
    "assets/img/form-log/bg8.jpg",
    "assets/img/form-log/bg9.jpg",
    "assets/img/form-log/bg10.jpg",
    "assets/img/form-log/bg11.jpg",
    "assets/img/form-log/bg12.jpg",
    "assets/img/form-log/bg13.jpg",
    "assets/img/form-log/bg14.jpg",
  ] // Liste des background

  getBackgrounds(): any {
    const randomImageUrl = this.tabBg[Math.floor(Math.random() * this.tabBg.length)]; // Choix random d'une image parmi tabBg

    return randomImageUrl;
  }
}
