import { UserLoginModel } from "../models/user-login-model";
import { ValidationRules } from "aurelia-validation";

export class LoginViewValidator {
    validate(model: UserLoginModel) : void {
        ValidationRules
            .ensure((model: UserLoginModel) => model.email)
                .required().withMessage('Email is required.')
                .email().withMessage('Email is not correct.')
            .ensure((model: UserLoginModel) => model.password)
                .required().withMessage('Password is required.')
            .on(model);
    }
}