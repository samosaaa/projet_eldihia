// connexion.component.ts
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authentication/auth.service';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {users} from "../../mock/data";
import {SnackbarService} from "../../services/snackbar/snackbar.service";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],

})
export class ConnexionComponent implements OnInit{
  isAuthenticated !: boolean;
  userAuthentication !: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, public snackbarService:SnackbarService) {
    this.userAuthentication = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required],
    });
  }


  signIn(): void {
    const {mail, mdp} = this.userAuthentication.value;
    this.authService.login(mail, mdp);

    if (this.authService.isAuthenticatedUser()) {
      this.snackbarService.openSnackBar("Vous êtes bien authentifié. Bienvenue !")
      this.router.navigate(['']);

    } else {
      this.snackbarService.openSnackBar("Nom d\'utilisateur ou mot de passe incorrect !")
      this.router.navigate(['/connexion']);

    }
  }

    initForm() {
        this.userAuthentication = this.formBuilder.group({
            mail: ['', [Validators.required, Validators.email]],
            mdp: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

}
