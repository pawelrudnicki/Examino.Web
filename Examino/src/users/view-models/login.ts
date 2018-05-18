import { UserLoginModel } from "../models/user-login-model";
import { LoginViewValidator } from "../validators/login-view-validator";
import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { autoinject } from "aurelia-dependency-injection";
import * as toastr from 'toastr';

@autoinject()
export class UsersLoginViewModel {

    private validationController: ValidationController;
    private model: UserLoginModel;
    private rememberMe: boolean;

    constructor(validator: LoginViewValidator, validationControllerFactory: ValidationControllerFactory) {
        this.model = new UserLoginModel();
        this.rememberMe = true;
        this.validationController = validationControllerFactory.createForCurrentScope();
        validator.validate(this.model);
    }

    login() {
        toastr.success('Login succeed!');
    }
}