import { Injectable } from '@angular/core';
import notify from 'devextreme/ui/notify';
import hideToasts from 'devextreme/ui/toast/hide_toasts';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // Fonction pour afficher une notification à l'écran
  notification(message: string, type: any){
    // Initialisation de variables
    const position = "bottom center"; // Position de la notif
    const direction = "down-push";    // Direction de la notif

    // Suppression des autres notifications avant d'en afficher une nouvelle
    hideToasts();
    
    // Fonction de devextreme pour les notifications
    notify({
      message: message,
      height: 50,
      width: "auto",
      minWidth: 150,
      type: type,
      displayTime: 3500,
      animation: {
        show: {
          type: 'fade', duration: 400, from: 0, to: 1,
        },
        hide: { type: 'fade', duration: 40, to: 0 },
      },
    },
    { position, direction });
  }
}
