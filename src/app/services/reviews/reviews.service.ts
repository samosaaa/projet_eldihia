import {Injectable} from '@angular/core';
import {ReviewModel} from "../../models/review";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ReviewsService {
    private baseUrl:string = '/api/reviews';

    constructor(private http: HttpClient) {
    }

    public getReviews(): Observable<ReviewModel[]> {
        const url: string = `${this.baseUrl}`;
        return this.http.get<ReviewModel[]>(url);
    }

}
