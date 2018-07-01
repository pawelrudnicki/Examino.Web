import { ExamModel } from "./exams/models/exam-model";
import { autoinject, observable } from "aurelia-framework";
import { ExamsService } from "./exams/services/exam-service";
import * as toastr from 'toastr';
import { Router } from "aurelia-router";

@autoinject()
export class HomeViewModel {

    private exams: ExamModel[];

    @observable
    private searchText: string;

    constructor(private examsService: ExamsService, private router: Router) {}

    async activate() {
        this.searchText = '';
        await this.browseExams();
    }

    async browseExams() {
        this.exams = await this.examsService.browse(this.searchText);
        if(this.exams.length === 0)
            toastr.warning('No exams found!');
    }

    redirectToExamDetails(examId: string) {
        this.router.navigate(`#/exams/${examId}`);
    }

    private async searchTextChanged(){
        await this.browseExams();
    }
}