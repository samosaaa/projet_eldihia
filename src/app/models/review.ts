export class ReviewModel {
    public id : string
    public username: string;
    public rating: number;
    public comment: string;
    public robeId : string;


    constructor(id:string,username: string, rating: number, comment: string, robeId:string) {
        this.username = username;
        this.rating = rating;
        this.comment = comment;
        this.id = id
        this.robeId = robeId;
    }
}
