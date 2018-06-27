import { RouterConfiguration } from "aurelia-router";

export class UsersRouting{
    configureRouter(config: RouterConfiguration){
        config.title = 'Users';
        config.map([
            {route:'register', moduleId:'../view-models/register'},
            {route:'login', moduleId:'../view-models/login'}
        ]);
    }
}