import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {UserModel} from "../../models/user";
import {HttpClient} from '@angular/common/http';
import {users} from "../../mock/data";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated = false;
  private registeredUsers: { mail: string; mdp: string }[] = [];

  constructor(private http: HttpClient) {
  }

  login(mail: string, mdp: string): void {
    const user = users.find((u) => u.mail === mail && u.mdp === mdp);

    if (user) {
      console.log(user);
      this.isAuthenticated = true;
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
    return this.http.post<UserModel>('api/register', userToRegister);
  }


}
