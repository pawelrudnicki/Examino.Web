import { UserLoginModel } from "./user-login-model";
export class UserRegisterModel extends UserLoginModel{
    email: string;
    role: string;
    confirmPassword: string;

    constructor() {
        super();
        this.role = 'user';
    }
}