import { UserIdentityModel } from "../users/models/user-identity-model";

export class IdentityService {

    public get isUserLogged() { return this.identity? true : false};

    get userIdentity(): UserIdentityModel {
        return this.identity;
    };

    private identity: UserIdentityModel;    

    setUserIdentity(userIdentity: UserIdentityModel) : void {
        this.identity = userIdentity;
    }
}
