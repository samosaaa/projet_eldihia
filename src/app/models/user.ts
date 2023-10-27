export class UserModel {
    public id: string;
    public firstName: string;
    public lastName: string;
    public mail: string;
    public mdp : string;
    public role : string;


    constructor(id:string,firstName:string,lastName:string,mail:string,mdp : string,role : string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.mdp = mdp;
        this.role = role;
    }
}
