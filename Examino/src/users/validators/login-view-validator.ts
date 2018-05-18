import { UserLoginModel } from "../models/user-login-model";
import { ValidationRules } from "aurelia-validation";

export class LoginViewValidator {
    validate(model: UserLoginModel) : void {
        ValidationRules
            .ensure((model: UserLoginModel) => model.name)
                .required().withMessage('Login is required.')
            .ensure((model: UserLoginModel) => model.password)
                .required().withMessage('Password is required')
            .on(model);
    }
}