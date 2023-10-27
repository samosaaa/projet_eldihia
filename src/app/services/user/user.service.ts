import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = '/api/users'; // L'URL vers la base de données simulée

  constructor(private http: HttpClient) {}

  getUsers() : Observable<UserModel[]> {
    console.log("dans le service" +this.http.get<Array<UserModel>>(this.baseUrl));
    this.http.get<Array<UserModel>>(this.baseUrl).subscribe((data: UserModel[]) => {
      console.log("Les produits : ", data);
    });
    return this.http.get<UserModel[]>(this.baseUrl);
  }
}
