import { UserIdentityModel } from "../users/models/user-identity-model";

export class IdentityService {

    get userIdentity() {
        return this.identity;
    }

    get isUserLogged() {
        return this.identity? true : false;
    }

    private identity: UserIdentityModel;

    setUserIdentity(userIdentity: UserIdentityModel) : void{
        this.identity = userIdentity;
    }
}