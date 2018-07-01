import { NavigationInstruction, Next, Redirect } from "aurelia-router";
import { UserIdentityModel } from "../users/models/user-identity-model";

export class RoutingAuthorizeStep {

    private readonly userIdentity: UserIdentityModel

    constructor(userIdentity: UserIdentityModel) {
        this.userIdentity = userIdentity;
    }

    run(navigationInstruction: NavigationInstruction, next: Next) : Promise<any> {
        let requiredRoles = navigationInstruction
            .getAllInstructions()
            .map(i => i.config.settings.roles)[0];

        let isUserInRole = requiredRoles?
            requiredRoles.some(r => r === this.userIdentity.role) : true;

        return isUserInRole? next() : next.cancel(new Redirect('users/login'));
    }
}