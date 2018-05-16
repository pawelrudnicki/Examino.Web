import { autoinject } from "aurelia-dependency-injection";
import { DataService } from "../../core/data-service";
import { UserRegisterModel } from "../models/user-register-model";
import { HttpClient } from "aurelia-fetch-client";

export interface IUsersService {
    register(model: UserRegisterModel) : Promise<any>;
}

@autoinject()
export class UsersService extends DataService implements IUsersService {

    constructor(httpClient: HttpClient) {
        super(httpClient)
    }
    
    register(model: UserRegisterModel): Promise<any> {
        let url = 'account/register';
        return super.post<any>(url, model);
    }
}




