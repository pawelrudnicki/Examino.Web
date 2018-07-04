import { autoinject } from "aurelia-framework";
import { ExamExerciseModel } from "../../exams/models/exam-exercise-model";
import { ExamsService } from "../../exams/services/exam-service";
import { Router } from "aurelia-router";

@autoinject()
export class AdminExerciseForm {
    private ExamIdToAddExercise: string;
    private model: ExamExerciseModel;

    constructor(private examsService: ExamsService, private router: Router){}

    async activate(params: any) {
        this.ExamIdToAddExercise = params.id;
    }

    async addExercise() {
        await this.examsService.addExercise(<ExamExerciseModel>this.model);
        this.redirectToAdminExams;
    }

    redirectToAdminExams() {
        this.router.navigate('#/admins/exams');
    }
}