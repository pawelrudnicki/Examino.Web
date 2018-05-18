import { UserRegisterModel } from "../models/user-register-model";
import { ValidationRules } from "aurelia-validation";

export class RegisterViewValidator {
    validate(model: UserRegisterModel) : void {
        ValidationRules
            .ensure((model: UserRegisterModel) => model.name)
                .required().withMessage('Login is required.')
            .ensure((model: UserRegisterModel) => model.email)
                .required().withMessage('Email is required.')
                .email().withMessage('Email is not correct.')
            .ensure((model: UserRegisterModel) => model.password)
                .required().withMessage('Password is required.')
                .minLength(4).withMessage('Password must contain at least 4 characters.')
            .ensure((model: UserRegisterModel) => model.confirmPassword)
                .required().withMessage('Password confirmation is required.')
                .satisfies((value: string, model: UserRegisterModel) => value === model.password).withMessage('Password confirmation is not correct.')
            .on(model);
    }
}