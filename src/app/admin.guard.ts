import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {UserService} from "./services/user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.userService.getLoggedUser();
    if (user && user.role === 'admin') {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige vers la page de connexion si l'utilisateur n'est pas un admin
      return false;
    }
  }
}
