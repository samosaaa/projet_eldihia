// connexion.component.ts
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authentication/auth.service';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from "../../services/user/user.service";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],

})
export class ConnexionComponent implements OnInit{
  isAuthenticated !: boolean;
  userAuthentication !: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
              private router: Router, private userService : UserService) {
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
      if(this.userService.getUserByUsernameAndPassword(mail,mdp)){
        this.userService.isLogged(this.userService.getUserByUsernameAndPassword(mail,mdp));
      }

      this.router.navigate(['']);
    } else {
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
