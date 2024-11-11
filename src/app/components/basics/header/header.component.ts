import { Component, HostListener } from '@angular/core';

// Services
import { ChangeLanguageService } from '../../../services/change-language/change-language.service';
import { LoginLogoutService } from '../../../services/login-logout/login-logout.service';
import { PageLoaderService } from '../../../services/page-loader/page-loader.service';
import { ShowPopupAccountService } from '../../../services/show-popup-account/show-popup-account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Initialisation de variables
  menuToggleValue: boolean = true;
  windowSize: boolean = window.innerWidth < 1000;

  constructor(public languageService: ChangeLanguageService, public logService: LoginLogoutService, public showPopupService: ShowPopupAccountService, public pageLoaderService: PageLoaderService) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowSize = window.innerWidth < 1000;
  }

  disableScroll() {  
    if (this.menuToggleValue) {
      // Désactiver le scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Réactiver le scroll
      document.body.style.overflow = 'auto';
    }  

    this.menuToggleValue = !this.menuToggleValue;
  }
}