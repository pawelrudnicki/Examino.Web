import { RouterConfiguration } from "aurelia-router";

export class ExamsRouting {
    configureRouter(config: RouterConfiguration) {
        config.title = 'Exams';
        config.map([
            {route: ':id', moduleId: '../view-models/exam-details'}
        ]);
    }
}