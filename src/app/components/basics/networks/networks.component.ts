import { Component } from '@angular/core';

// Services
import { ChangeLanguageService } from '../../../services/change-language/change-language.service';
import { LoginLogoutService } from '../../../services/login-logout/login-logout.service';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrl: './networks.component.css'
})
export class NetworksComponent {
  constructor(public languageService: ChangeLanguageService, public logService: LoginLogoutService) {
    
  }
}
