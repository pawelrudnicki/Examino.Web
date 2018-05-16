import { UserRegisterModel } from '../models/user-register-model';
import { HttpClient } from 'aurelia-fetch-client';

export class UsersRegisterViewModel {

    private model: UserRegisterModel;

    constructor() {
        this.model = new UserRegisterModel();

        new HttpClient().fetch("https://api.github.com/users/goorion/repos")
            .then<any>(response => response.json())
            .then(r => console.log(r));
    }

    register() {
        alert(this.model.login);
    }
}