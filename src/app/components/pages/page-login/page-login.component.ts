import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import hideToasts from 'devextreme/ui/toast/hide_toasts';

// Services
import { BackgroundService } from '../../../services/background/background.service';
import { ChangeLanguageService } from '../../../services/change-language/change-language.service';
import { LoginLogoutService } from '../../../services/login-logout/login-logout.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})
export class PageLoginComponent implements OnInit {
  // Initialisation de variables
  tabBg!: any               // Tableau des images pour le fond d'écran
  loaderVisibility = false; // Visibilité du loader

  constructor(public logService: LoginLogoutService, public router: Router, private elementRef: ElementRef, public languageService: ChangeLanguageService, private userService: UserService, public bgService: BackgroundService) {

  }

  ngOnInit() {
    this.tabBg = this.bgService.getBackgrounds();

    // Initialisation de variables
    const bgImageElt = document.querySelector('.app_bg_image img') as HTMLImageElement; // Image en fond d'écran

    // Si l'élément html de l'image de fond est bien chargée
    if (bgImageElt) {
      bgImageElt.src = this.tabBg;
    }
  }

  // Fonction pour vérifier la soumission du formulaire
  onSubmit(form: NgForm): void {
    // Initialisation de variables
    const mail = this.elementRef.nativeElement.querySelector(".mail");         // Champ du mail
    const password = this.elementRef.nativeElement.querySelector(".password"); // Champ du mot de passe

    // Si le formulaire est valide, il est soumis et les actions suivantes sont effectuées
    if (form && form.valid && mail.value != "" && password.value != "") {
      this.userService.getUsers().subscribe(users => {
        for (const user of users) {
          // const passwordMatch = await this.userService.comparePasswords(password.value, user.mdp); // MotDePasse123         

          if (user.email === mail.value && user.mdp === password.value) {            
            this.loaderVisibility = true;
    
            setTimeout(() => {
              this.loaderVisibility = false;

              // Suppression des notifications avant le changement de page
              hideToasts();
              this.logService.changeStateLog('false');
              this.router.navigate(['']);
            }, 3000);

            break;
          }
        }        
      });
    }
  }
}