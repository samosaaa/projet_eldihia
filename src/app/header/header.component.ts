import {Component} from '@angular/core';
import {AuthService} from '../services/authentication/auth.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {Router, RouterModule,} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {UserModel} from "../models/user";
import {UserService} from "../services/user/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    users: UserModel[] = [];

    constructor(public authService: AuthService, public userService: UserService, private router: Router) {
        this.loadUser();
    }
    public loadUser() {
        this.userService.getUsers().subscribe(data => (this.users = data));
        console.log(this.users);
    }

    signOut():void{
        alert('Vous allez être déconnecté!')
        this.authService.logout();
        this.router.navigate(['']);

    }
}
