import { RouterConfiguration } from "aurelia-router";
import { autoinject } from "aurelia-dependency-injection";
import { UsersService } from "./users/services/users-service";
import { IdentityService } from "./core/identity-service";
import { RoutingAuthorizeStep } from "./core/routing-authorize-step";
import { UserIdentityModel } from "./users/models/user-identity-model";

@autoinject()
export class App {

  private userIdentity: UserIdentityModel;
  private isUserLogged: boolean;

  constructor(private identityService: IdentityService, private usersService: UsersService){}

  async activate() {
    this.userIdentity = await this.usersService.getUserIdentity();
    
    if(!this.identityService.isUserLogged){
      this.identityService.setUserIdentity(this.userIdentity);
    }
  }
  
  configureRouter(config: RouterConfiguration){
    let authorizeStep = new RoutingAuthorizeStep(this.userIdentity);

    config.title = 'Examino';
    config.addAuthorizeStep(authorizeStep);
    config.map([
      {route: ['', 'home'], moduleId: './home' },
      {route: 'users', moduleId: './users/config/users-routing' },
      {route: 'admins', moduleId: './admins/config/admins-routing'},
      {route: 'exams', moduleId: './exams/config/exams-routing'}
    ]);
  }
}
