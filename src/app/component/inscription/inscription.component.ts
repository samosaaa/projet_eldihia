import {Component} from '@angular/core';
import {AuthService} from '../../services/authentication/auth.service';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {UserService} from "../../services/user/user.service";
import {users} from "../../mock/data";
import {UserModel} from "../../models/user";
import { InscriptionForm } from "./inscription-form.model";

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})

export class InscriptionComponent {
    inscriptionForm!: FormGroup;
    isAuthenticated!: false;
    private usersList: UserModel[] = users;


    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService) {
        this.inscriptionForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            mail: ['', [Validators.required, Validators.email]],
            mdp: ['', Validators.required],
            role: ['user']
        });
    }


    signUp() {
        const {firstName, lastName, mail, mdp, role} = this.inscriptionForm.value;
        this.authService.register(firstName, lastName, mail, mdp, role)
            .subscribe(
                (user) => {

                    this.userService.isLogged(user);
                    this.authService.login(mail, mdp);
                    if (this.authService.isAuthenticated){
                        alert('Inscription réussie');
                        this.router.navigate(['/connexion']);
                    }
                },
                (error) => {
                    alert('Échec de l\'inscription');
                }
            );
    }
}
