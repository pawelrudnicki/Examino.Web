import { autoinject } from "aurelia-dependency-injection";
import { UserRegisterModel } from "../models/user-register-model";
import { HttpClient } from "aurelia-fetch-client";
import { IUsersService, UsersService } from "../services/users-service";

@autoinject()
export class UsersRegisterViewModel {

    private model: UserRegisterModel;

    constructor(private usersService: UsersService) {
        this.model = new UserRegisterModel();
    }

    async register() {
        await this.usersService.register(this.model);
    }
}