import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {
  public visibility = "flex";

  getLoaderValue() {
    return this.visibility;
  }

  showWithTimeout(timeout: number = 5000) {
    this.visibility = "flex";

    setTimeout(() => {
      this.visibility = "none";
    }, timeout);
  }
}
