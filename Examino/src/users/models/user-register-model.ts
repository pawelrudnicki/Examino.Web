export class UserRegisterModel {
    name: string;
    email: string;
    role: string;
    password: string;
    confirmPassword: string;

    constructor() {
        this.role = 'user';
    }
}