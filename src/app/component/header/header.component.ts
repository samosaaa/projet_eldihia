import {Component} from '@angular/core';
import {AuthService} from '../../services/authentication/auth.service';
import {Router} from '@angular/router';
import {UserModel} from "../../models/user";
import {UserService} from "../../services/user/user.service";
import {SnackbarService} from "../../services/snackbar/snackbar.service";
import {FavorisService} from "../../services/favoris/favoris.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  users: UserModel[] = [];

  favoris: string[] = [];

  constructor(public authService: AuthService, public userService: UserService, private router: Router, private snackbarService: SnackbarService, private favorisService: FavorisService) {
  }


  signOut(): void {
    this.snackbarService.openSnackBar("Vous avez été déconnecté. A bientôt, Aurevoir !", 10)
    this.authService.logout();
    this.router.navigate(['']);

  }
}
