import { Injectable } from '@angular/core';
import {ReviewModel} from "../../models/review";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = '/api/reviews';

  constructor(private http: HttpClient) {}

  public getReviews(): Observable<ReviewModel[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<ReviewModel[]>(url);
  }

  public addReview(productId: string, newReview: ReviewModel): Observable<ReviewModel> {
    const jsonBody:string =JSON.stringify(newReview);
    const url = `${this.baseUrl}/${productId}`;
    return this.http.post<ReviewModel>(url, jsonBody);
  }

  public updateReview(idReview:number,newReview:string):Observable<ReviewModel>{
    const jsonBody:string =JSON.stringify(newReview);
    const url = `${this.baseUrl}/${idReview}`;
    return this.http.put<ReviewModel>(url,jsonBody);
  }

  public deleateReview(idReview:number):Observable<ReviewModel>{
    const url = `${this.baseUrl}/${idReview}`;
    return this.http.delete<ReviewModel>(url);
  }
}
