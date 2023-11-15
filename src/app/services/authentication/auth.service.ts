import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {UserModel} from "../../models/user";
import {HttpClient} from '@angular/common/http';
import {users} from "../../mock/data";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
  public isAuthenticated = false;
  private currentUserSubject: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
  public isAdmin = false;

    constructor(private http: HttpClient) {
    }

    login(mail: string, mdp: string): void {
        const user = users.find((u) => u.mail === mail && u.mdp === mdp);

    if (user) {
      console.log(user);
      this.isAuthenticated = true;
    }
    this.http.post<UserModel>('/api/login', user);

    if(user?.role=='admin'){
      this.isAdmin = true;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

    isAuthenticatedUser(): boolean {
        return this.isAuthenticated;
    }

  register(firstName: string, lastName: string, mail: string, mdp: string, role: string): Observable<UserModel> {
    const userToRegister = {
      firstName,
      lastName,
      mail,
      mdp,
      role,
    };
    return this.http.post<UserModel>('/api/register', userToRegister);
  }
  isAdminUser():boolean{
    return this.isAdmin;
  }
}
