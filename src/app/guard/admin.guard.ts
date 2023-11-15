import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {UserService} from "../services/user/user.service";
import {AuthService} from "../services/authentication/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService, private userService: UserService, private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.authService.isAuthenticatedUser() && this.authService.isAdminUser()) {
            return true;
        }

        // Rediriger vers une page d'accès refusé ou de connexion si l'utilisateur n'est pas authentifié ou n'a pas le rôle d'admin
        this.router.navigate(['/access-denied']); // Remplacez cela par le chemin de votre choix
        return false;
    }
}
