import {Component} from '@angular/core';
import {AuthService} from '../services/authentication/auth.service';
import {Router} from '@angular/router';
import {UserModel} from "../models/user";
import {UserService} from "../services/user/user.service";
import {SnackbarService} from "../services/snackbar/snackbar.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    users: UserModel[] = [];

    constructor(public authService: AuthService, public userService: UserService, private router: Router, private snackbarService: SnackbarService) {
        this.loadUser();
    }
    public loadUser() {
        this.userService.getUsers().subscribe(data => (this.users = data));
        console.log(this.users);
    }

    signOut():void{
        this.snackbarService.openSnackBar("Vous avez été déconnecté. A bientôt, Aurevoir !", 10)
        this.authService.logout();
        this.router.navigate(['']);

    }
}
