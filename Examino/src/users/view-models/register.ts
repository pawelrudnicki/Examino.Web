import { autoinject } from "aurelia-dependency-injection";
import { IUsersService, UsersService } from "../services/users-service";
import { UserRegisterModel } from "../models/user-register-model";
import { HttpClient } from "aurelia-fetch-client";
import { RegisterViewValidator } from "../validators/register-view-validator";
import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import * as toastr from "toastr";

@autoinject()
export class UsersRegisterViewModel {

    private validationController: ValidationController;
    private model: UserRegisterModel;

    constructor(private usersService: UsersService, validator: RegisterViewValidator,
        validationControllerFactory: ValidationControllerFactory) {
        this.model = new UserRegisterModel();
        this.validationController = validationControllerFactory.createForCurrentScope();
        validator.validate(this.model);
    }

    async register() {
        await this.usersService.register(this.model);
        toastr.success('Registration succeed');
    }
}