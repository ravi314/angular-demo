export class User {
    constructor(private _id:number, private _name:string, private _username:string, private _email:string){}

    get id(){
        return this._id;
    }

    get username(){
        return this._username;
    }

    get name(){
        return this._name;
    }

    get email(){
        return this._email;
    }

}