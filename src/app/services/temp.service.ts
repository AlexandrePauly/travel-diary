import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempService {
  private jsonFileUrl = '../../assets/data/user.json';

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.jsonFileUrl);
  }

  updateJsonData(newData: any): Observable<any> {
    return this.http.put(this.jsonFileUrl, newData);
  }
}