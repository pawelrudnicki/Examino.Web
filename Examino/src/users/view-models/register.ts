import {UserRegisterModel} from '../models/user-register-model';

export class UsersRegisterViewModel {

    private model: UserRegisterModel;

    constructor() {
        this.model = new UserRegisterModel();
    }

    register() {
        alert(this.model.login);
    }
}