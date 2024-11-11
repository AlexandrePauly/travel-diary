import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginLogoutService {
  // Initialisation de variables
  private logState: string = 'false'; // Etat de la connexion (connecté ou non)

  // Fonction pour changer l'état de la connexion
  changeStateLog(state: string){
    this.logState = state;
    localStorage.setItem('user', state);
  }

  // Fonction pour savoir si un utilisateur est connecté ou non
  isConnected(): any {
    if (localStorage.getItem('user')){
      return localStorage.getItem('user');
    }
    else{
      return this.logState;
    }
  }
}
