import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private data = '../../assets/data/user.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any>(this.data).pipe(
      map((response: any) => response.users)
    );
  }

  addUser(newUser: any): Observable<any[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    // Utilisez JSON.stringify() pour encoder les données en JSON
    const body = JSON.stringify(newUser);

    return this.http.post<any[]>(this.data, body, { headers });
  }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
