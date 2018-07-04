import { RouterConfiguration } from "aurelia-router";

export class AdminsRouting {

    configureRouter(config: RouterConfiguration) {
        config.title = 'Admins';

        config.map([
            {route: 'exams', moduleId: '../view-models/admin-exams'},
            {route: ['exams/create', 'exams/:id/update'] , moduleId: '../view-models/admin-exam-form'},
            {route: 'exams/:id/exercise', moduleId: '../view-models/admin-exercise-form'}
        ]);
    }
}