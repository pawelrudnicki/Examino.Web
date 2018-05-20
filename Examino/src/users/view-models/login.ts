import { Router } from "aurelia-router";
import { UserLoginModel } from "../models/user-login-model";
import { LoginViewValidator } from "../validators/login-view-validator";
import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { autoinject } from "aurelia-dependency-injection";
import { UsersService } from "../services/users-service";
import { AuthService } from "../../core/auth-service";
import { IdentityService } from "../../core/identity-service";
import * as toastr from 'toastr';

@autoinject()
export class UsersLoginViewModel {

    private validationController: ValidationController;
    private model: UserLoginModel;
    private rememberMe: boolean;

    constructor(private usersService: UsersService, private identityService:IdentityService,
        private router:Router, private authService: AuthService, validator: LoginViewValidator, 
        validationControllerFactory: ValidationControllerFactory) {
        this.model = new UserLoginModel();
        this.rememberMe = true;
        this.validationController = validationControllerFactory.createForCurrentScope();
        validator.validate(this.model);
    }

    async login() {
        let userAuthModel = await this.usersService.login(this.model);
        this.authService.setAccessToken(userAuthModel.token, this.rememberMe);
        let userIdentity = await this.usersService.getUserIdentity();
        this.identityService.setUserIdentity(userIdentity);
        this.router.navigate('#/');
        toastr.success(`Hello ${userIdentity.name}!`);
    }
}