import { Component } from '@angular/core';

// Services
import { LoginLogoutService } from '../../../services/login-logout/login-logout.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(public logService: LoginLogoutService) {}
}
