import { UserLoginModel } from "./user-login-model";
export class UserRegisterModel extends UserLoginModel{
    name: string;
    role: string;
    confirmPassword: string;

    constructor() {
        super();
        this.role = 'admin';
    }
}
