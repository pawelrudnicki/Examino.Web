import { ExamDetailsModel } from "../models/exam-details-model";
import { autoinject } from 'aurelia-dependency-injection';
import { ExamsService } from "../services/exam-service";

@autoinject()
export class ExamDetailsViewModel {
    
    public examId: string;
    public exam: ExamDetailsModel;

    constructor(private examsService: ExamsService) {}

    async activate(params: any) {
        this.examId = params.id;
        await this.getExamDetails();
    }

    private async getExamDetails() {
        this.exam = await this.examsService.getExam(this.examId);
    }
}