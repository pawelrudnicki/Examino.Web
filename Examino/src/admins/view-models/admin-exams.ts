import { ExamModel } from "../../exams/models/exam-model";
import { autoinject } from "aurelia-framework";
import { ExamsService } from "../../exams/services/exam-service";
import { Router } from "aurelia-router";

@autoinject()
export class AdminExamsViewModel {
    
    private exams: ExamModel[];

    constructor(private examsService: ExamsService, private router: Router) {
        this.exams = [];
    }

    async activate() {
        await this.getAdminExams();
    }

    async deleteExam(examId: string, index: number) {
        let confirm = window.confirm('Do you want to remove this exam?');
        if(!confirm) return;
        await this.examsService.delete(examId);
        this.removeExamFromExams(index);
    }

    redirectToAdminExamForm(examId: string) {
        let url = examId? `#/admins/exams/${examId}/update` : '#/admins/exams/create';
        this.router.navigate(url);
    }

    redirectToAdminExerciseForm(examId: string) {
        let url = `#/admins/exams/${examId}/exercise`;
        this.router.navigate(url);
    }

    private async getAdminExams() {
        this.exams = await this.examsService.browse('');
    }

    private removeExamFromExams(index: number) {
        this.exams.splice(index, 1);
    }
}