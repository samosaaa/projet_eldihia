// connexion.component.ts
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/authentication/auth.service';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {users} from "../mock/data";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],

})
export class ConnexionComponent implements OnInit{
  isAuthenticated !: boolean;
  userAuthentication !: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.userAuthentication = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required],
    });
  }


  signIn(): void {
    const {mail, mdp} = this.userAuthentication.value;
    this.authService.login(mail, mdp);
    //this.userService.isLogged(user);
    if (this.authService.isAuthenticatedUser()) {
      this.router.navigate(['']);
    } else {
      console.log('Nom d\'utilisateur ou mot de passe incorrect.');
      this.router.navigate(['/connexion']);

    }
  }


    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.userAuthentication = this.formBuilder.group({
            mail: ['', [Validators.required, Validators.email]],
            mdp: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

}
