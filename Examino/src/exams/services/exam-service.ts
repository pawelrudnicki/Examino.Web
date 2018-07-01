import { autoinject } from 'aurelia-dependency-injection';
import { DataService } from "../../core/data-service";
import { HttpClient } from 'aurelia-fetch-client';
import { AuthService } from '../../core/auth-service';
import { ExamModel } from '../models/exam-model';
import { CreateExamModel } from '../models/create-exam-model';
import { UpdateExamModel } from '../models/update-exam-model';
import { ExamDetailsModel } from '../models/exam-details-model';

@autoinject()
export class ExamsService extends DataService {
    constructor(httpClient: HttpClient, authService: AuthService) {
        super(httpClient, authService);
    }

    browse(name: string) : Promise<ExamModel[]> {
        let url = `exams?name=${name}`;
        return super.get<ExamModel[]>(url, false);
    }

    getExam(examId: string) : Promise<ExamDetailsModel> {
        let url = `exams/${examId}`;
        return super.get<ExamDetailsModel>(url, true);
    }

    create(model: CreateExamModel) : Promise<any> {
        let url = 'exams';
        return super.post<any>(url, model, true);
    }

    update(examId: string, model: UpdateExamModel) : Promise<any> {
        let url = `exams/${examId}`;
        return super.put<any>(url, model, true);
    }

    delete(examId: string) : Promise<any> {
        let url = `exams/${examId}`;
        return super.delete(url, true);
    }
}