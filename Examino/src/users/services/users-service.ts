import { autoinject } from "aurelia-dependency-injection";
import { DataService } from "../../core/data-service";
import { UserRegisterModel } from "../models/user-register-model";
import { HttpClient } from "aurelia-fetch-client";
import { UserLoginModel } from "../models/user-login-model";
import { UserAuthModel } from "../models/user-auth-model";
import { AuthService } from "../../core/auth-service";



@autoinject()
export class UsersService extends DataService {

    constructor(httpClient: HttpClient, authService: AuthService) {
        super(httpClient, authService)
    }
    
    register(model: UserRegisterModel): Promise<any> {
        let url = 'account/register';
        return super.post<any>(url, model, false);
    }

    login(model: UserLoginModel) : Promise<UserAuthModel> {
        let url = 'account/login';
        return super.post<UserAuthModel>(url, model, false);
    }
}




