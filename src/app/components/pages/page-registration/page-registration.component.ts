import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import hideToasts from 'devextreme/ui/toast/hide_toasts';

// Services
import { BackgroundService } from '../../../services/background/background.service';
import { ChangeLanguageService } from '../../../services/change-language/change-language.service';
import { NotificationService } from '../../../services/notification/notification.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-page-registration',
  templateUrl: './page-registration.component.html',
  styleUrl: './page-registration.component.css'
})
export class PageRegistrationComponent implements OnInit {
  // Initialisation de variables
  tabBg!: any               // Tableau des images pour le fond d'écran
  loaderVisibility = false; // Visibilité du loader

  constructor(public router: Router, private elementRef: ElementRef, public languageService: ChangeLanguageService, private userService: UserService, public notificationService: NotificationService, public bgService: BackgroundService) {
    
  }

  ngOnInit() {
    this.tabBg = this.bgService.getBackgrounds();

    // Initialisation de variables
    const bgImageElt = document.querySelector('.app_bg_image img') as HTMLImageElement; // Image en fond d'écran

    // Si l'élément html de l'image de fond est bien chargée
    if (bgImageElt) {
      bgImageElt.src = this.tabBg;
    }
  }

  // Fonction pour vérifier la soumission du formulaire
  onSubmit(form: NgForm): void {
    // Initialisation de variables
    const name = this.elementRef.nativeElement.querySelector(".name");            // Champ du nom
    const mail = this.elementRef.nativeElement.querySelector(".mail");            // Champ du mail
    const password1 = this.elementRef.nativeElement.querySelector(".password-1"); // Champ du mot de passe
    const password2 = this.elementRef.nativeElement.querySelector(".password-2"); // Champ du mot de passe
    
    // Si le formulaire est valide, il est soumis et les actions suivantes sont effectuées
    if (form && form.valid && name.value != "" && mail.value != "" && this.checkMailFormat(mail.value) && password1.value != "" && password2.value != "" &&  password1.value == password2.value) {
      this.userService.getUsers().subscribe(users => {          
        const emailExists = users.some((user) => user.email === mail.value);

        if (emailExists) {
          // Affichage d'un message de réussite
          const message = this.languageService.activedLanguage() === 'fr' ? "Cette adresse e-mail a déjà été utilisée" : "This e-mail address has already been used"
          this.notificationService.notification(message, "warning");

          this.checkForm(mail, "#f95959");
        } else {
          const newUser = {
            id: users.length + 1,
            name: name.value,
            email: mail.value,
            password: password1.value
          };
          
          // TODO : Ajout du nouvel utilisateur
          this.userService.addUser(newUser).subscribe(
            () => {
              this.loaderVisibility = true;
    
              setTimeout(() => {
                this.loaderVisibility = false;

                // Affichage d'un message de réussite
                const message = this.languageService.activedLanguage() === 'fr' ? "Votre compte a été créé avec succès" : "Your account has been successfully created"
                this.notificationService.notification(message, "success");

                setTimeout(() => {
                  // Suppression des notifications avant le changement de page
                  hideToasts();
                  this.router.navigate(['/login']);
                }, 2000);
              }, 3000);
            },
            (error) => {
              // Affichage d'un message d'erreur
              const message = this.languageService.activedLanguage() === 'fr' ? "Veuillez réessayer plus tard, le site n'a pas pu accéder à votre demande" : "Please try again later, the site was unable to process your request"
              this.notificationService.notification(message, "error");
            }
          );
        }      
      });
    }
    else {
      // Le formulaire n'est pas valide, déterminez quel champ est vide et appelez la fonction appropriée
      if (!name.value) {
        this.checkForm(name, "#f95959");
      }

      else {
        this.checkForm(name, "white");
      }

      if (!mail.value) {
        this.checkForm(mail, "#f95959");
      }
      else{
        this.checkForm(mail, "white");
      }

      if (!this.checkMailFormat(mail.value)) {
        this.checkForm(mail, "#f95959");
      }
      else{
        this.checkForm(mail, "white");
      }

      if (!password1.value) {
        this.checkForm(password1, "#f95959");
      }
      else{
        this.checkForm(password1, "white");
      }

      if (!password2.value) {
        this.checkForm(password2, "#f95959");
      }
      else{
        this.checkForm(password2, "white");
      }

      if (password1.value !== password2.value) {
        this.checkForm(password1, "#f95959");
        this.checkForm(password2, "#f95959");
      }
      else if (password1.value === password2.value && password1.value != "" && password2.value != "" ) {
        this.checkForm(password1, "white");
        this.checkForm(password2, "white");
      }

      // Affichage d'un message d'erreur
      const message = this.languageService.activedLanguage() === 'fr' ? "Veuillez remplir tous les champs" : "Please fill in all fields"
      this.notificationService.notification(message, "warning");

      if (!this.checkMailFormat(mail.value) && mail.value) {
        // Affichage d'un message d'erreur
        const message = this.languageService.activedLanguage() === 'fr' ? "Veuillez donner une adresse-mail valide" : "Please enter a valid e-mail address"
        this.notificationService.notification(message, "error");
      }
    }
  }

  // Fonction pour vérifier le remplissage du formulaire pour créer un compte. En fonction de son état, des styles sont modifiés
  checkForm(element: any, color: string) {
    const parentElement = element.parentNode;          

    // Ajout d'une classe pour avoir une animation
    parentElement.classList.add("animation");
    parentElement.childNodes[0].childNodes[0].classList.add("animation");
    parentElement.childNodes[1].classList.add("animation");
    parentElement.childNodes[2].classList.add("animation");
    parentElement.childNodes[2].childNodes[0].classList.add("animation");

    // Modification du style
    parentElement.style.borderColor = color;       
    parentElement.childNodes[0].childNodes[0].style.color = color;
    parentElement.childNodes[1].style.color = color;
    parentElement.childNodes[2].style.color = color;

    if(color === "#f95959") {
      parentElement.childNodes[2].childNodes[0].style.display = "inline-block";
    }
    else {
      parentElement.childNodes[2].childNodes[0].style.display = "none";      
    }
  }

  checkMailFormat(mail: string): boolean {
    // Utilisez une expression régulière pour vérifier le format de l'adresse email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  }
}