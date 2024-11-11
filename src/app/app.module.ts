import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { register } from 'swiper/element/bundle';
register();

// Components
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/basics/background/background.component';
import { CarousselComponent } from './components/basics/caroussel/caroussel.component';
import { FooterComponent } from './components/basics/footer/footer.component';
import { HeaderComponent } from './components/basics/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeDestinationComponent } from './components/basics/home-destination/home-destination.component';
import { LandingPageComponent } from './components/basics/landing-page/landing-page.component';
import { LittleCarousselComponent } from './components/basics/little-caroussel/little-caroussel.component';
import { MapComponent } from './components/pages/map/map.component';
import { MenuComponent } from './components/basics/menu/menu.component';
import { NetworksComponent } from './components/basics/networks/networks.component';
import { PageLoaderComponent } from './components/basics/page-loader/page-loader.component';
import { PageLoginComponent } from './components/pages/page-login/page-login.component';
import { PageRegistrationComponent } from './components/pages/page-registration/page-registration.component';
import { PageTravelComponent } from './components/pages/page-travel/page-travel.component';
import { PopupLogComponent } from './components/basics/popup-log/popup-log.component';
import { VerticalCarousselComponent } from './components/basics/vertical-caroussel/vertical-caroussel.component';

// Modules DevExtreme
import { DxLoadPanelModule, DxMapModule, DxPieChartModule, DxSelectBoxModule, DxToastModule, DxVectorMapModule } from 'devextreme-angular';

// Modules d'icon
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    CarousselComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HomeDestinationComponent,
    LandingPageComponent,
    LittleCarousselComponent,
    MapComponent,
    MenuComponent,
    NetworksComponent,
    PageLoaderComponent,
    PageLoginComponent,
    PageRegistrationComponent,
    PageTravelComponent,
    PopupLogComponent,
    VerticalCarousselComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // Modules d'icon
    MatIconModule,

    // Modules DevExtreme
    DxLoadPanelModule,
    DxMapModule,
    DxPieChartModule,
    DxSelectBoxModule,
    DxToastModule,
    DxVectorMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }