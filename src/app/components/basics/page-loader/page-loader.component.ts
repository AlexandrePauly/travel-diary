import { Component } from '@angular/core';

// Services
import { PageLoaderService } from '../../../services/page-loader/page-loader.service';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrl: './page-loader.component.css'
})
export class PageLoaderComponent {
  constructor(public pageLoaderService: PageLoaderService) {}
}
