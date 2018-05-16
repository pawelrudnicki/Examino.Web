import {RouterConfiguration} from 'aurelia-router';

export class App {
  
  configureRouter(config: RouterConfiguration){
    config.title = 'Examino';
    config.map([
      {route: ['', 'home'], moduleId: './home' },
      {route: 'users', moduleId: './users/config/users-routing' }  
    ]);
  }
}
