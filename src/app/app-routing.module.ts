import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LandingPageComponent } from './components/basics/landing-page/landing-page.component';
import { MapComponent } from './components/pages/map/map.component';
import { PageLoginComponent } from './components/pages/page-login/page-login.component';
import { PageRegistrationComponent } from './components/pages/page-registration/page-registration.component';
import { PageTravelComponent } from './components/pages/page-travel/page-travel.component';
import { VerticalCarousselComponent } from './components/basics/vertical-caroussel/vertical-caroussel.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'registration', component: PageRegistrationComponent },
  { path: 'map', component: MapComponent },
  { path: 'travel/:id', component: PageTravelComponent },
  { path: 'temp', component: VerticalCarousselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
