import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { ChangeLanguageService } from '../../../services/change-language/change-language.service';
import { LoginLogoutService } from '../../../services/login-logout/login-logout.service';
import { ShowPopupAccountService } from '../../../services/show-popup-account/show-popup-account.service';

@Component({
  selector: 'app-popup-log',
  templateUrl: './popup-log.component.html',
  styleUrl: './popup-log.component.css'
})
export class PopupLogComponent {
  constructor(public languageService: ChangeLanguageService, public logService: LoginLogoutService, public showPopupService: ShowPopupAccountService, public router: Router) {
    
  }

  // Fonction pour fermer la popup
  logout() {
    // Déconnexion de l'utilisateur
    this.logService.changeStateLog('true');

    // Fermeture de la popup et redirection vers la page d'accueil
    setTimeout(() => {
      this.showPopupService.hidePopup();

      setTimeout(() => {
        this.router.navigate(['']);
      }, 200);
    }, 500);
  }
}
