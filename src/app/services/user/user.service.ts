import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {UserModel} from "../../models/user";
import {users} from "../../mock/data";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl: string = '/api/users';
    private usersList: UserModel[] = users;

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.baseUrl);
    }

    getUserByUsernameAndPassword(username: string, password: string): UserModel | undefined {
        return this.usersList.find(user => user.mail === username && user.mdp === password);
    }


    //    \\
    public userSubject: Subject<UserModel | null> = new Subject<UserModel | null>();

    public isLogged(userLogged: UserModel | undefined): void {
        sessionStorage.setItem("userLogged", JSON.stringify(userLogged));
        if (userLogged) {
            this.userSubject.next(userLogged);
        }

    }


}
