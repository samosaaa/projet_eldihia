import {Component} from '@angular/core';
import {AuthService} from '../services/authentication/auth.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
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

    public openSnackBar(message:string) {
        this.snackbarService.openSnackBar(message);
    }
    signOut():void{
        this.openSnackBar("Vous allez être déconnecté!")
        alert('Vous allez être déconnecté!')
        this.authService.logout();
        this.router.navigate(['']);

    }
}
