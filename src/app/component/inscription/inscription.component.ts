import {Component} from '@angular/core';
import {AuthService} from '../../services/authentication/auth.service';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {UserService} from "../../services/user/user.service";


import {users} from "../../mock/data";
import {SnackbarService} from "../../services/snackbar/snackbar.service";

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})

export class InscriptionComponent {
    public inscriptionForm!: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService, private snackbarService: SnackbarService) {

    }

    ngOnInit() {
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
                    if (this.authService.isAuthenticated) {
                        this.authService.logout();
                        this.snackbarService.openSnackBar("Inscription réussie !", 5)
                        this.router.navigate(['/connexion']);
                    }
                },
                (error) => {
                    this.snackbarService.openSnackBar("Échec de l\'inscription !", 4)
                }
            );
    }
}
