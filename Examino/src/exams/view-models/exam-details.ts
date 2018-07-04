import { autoinject } from 'aurelia-dependency-injection';
import { ExamsService } from "../services/exam-service";
import { ExamModel } from '../models/exam-model';

@autoinject()
export class ExamDetailsViewModel {
    
    private examId: string;
    public exam: ExamModel;

    constructor(private examsService: ExamsService) {}

    async activate(params: any) {
        this.examId = params.id;
        await this.getExamDetails();
    }

    private async getExamDetails() {
        this.exam = await this.examsService.getExam(this.examId);
    }
}