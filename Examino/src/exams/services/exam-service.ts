import { autoinject } from 'aurelia-dependency-injection';
import { DataService } from "../../core/data-service";
import { HttpClient } from 'aurelia-fetch-client';
import { AuthService } from '../../core/auth-service';
import { ExamModel } from '../models/exam-model';
import { CreateExamModel } from '../models/create-exam-model';
import { UpdateExamModel } from '../models/update-exam-model';
import { ExamExerciseModel } from '../models/exam-exercise-model';

@autoinject()
export class ExamsService extends DataService {
    constructor(httpClient: HttpClient, authService: AuthService) {
        super(httpClient, authService);
    }

    browse(name: string) : Promise<ExamModel[]> {
        let url = `exams?name=${name}`;
        return super.get<ExamModel[]>(url, false);
    }

    getExam(examId: string) : Promise<ExamModel> {
        let url = `exams/${examId}`;
        return super.get<ExamModel>(url, false);
    }

    addExercise(model: ExamExerciseModel) : Promise<any> {
        let url = `exams/exercises`;
        return super.post<any>(url, model, false);
    }

    create(model: CreateExamModel) : Promise<any> {
        let url = `exams`;
        return super.post<any>(url, model, false);
    }

    update(examId: string, model: UpdateExamModel) : Promise<any> {
        let url = `exams/${examId}`;
        return super.put<any>(url, model, false);
    }

    delete(examId: string) : Promise<any> {
        let url = `exams/${examId}`;
        return super.delete(url, false);
    }
}