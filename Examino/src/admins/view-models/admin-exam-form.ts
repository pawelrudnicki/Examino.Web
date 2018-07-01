import { textChangeRangeIsUnchanged } from "typescript";
import { UpdateExamModel } from "../../exams/models/update-exam-model";
import { CreateExamModel } from "../../exams/models/create-exam-model";
import { autoinject } from "aurelia-framework";
import { ExamsService } from "../../exams/services/exam-service";
import { Router } from "aurelia-router";

@autoinject()
export class AdminExamFormViewModel {

    private examToUpdateId: string;
    private isCreateMode: boolean;
    private model: CreateExamModel | UpdateExamModel;

    constructor(private examsService: ExamsService, private router: Router) {}

    async activate(params: any) {
        this.examToUpdateId = params.id;
        this.isCreateMode = this.examToUpdateId? false : true;
        this.isCreateMode? this.setCreateMode() : await this.setEditMode();
    }

    async createExam() {
        await this.examsService.create(<CreateExamModel>this.model);
        this.redirectToAdminExams();
    }

    async editExam() {
        await this.examsService.update(this.examToUpdateId, <UpdateExamModel> this.model);
        this.redirectToAdminExams();
    }

    redirectToAdminExams() {
        this.router.navigate('#/admins/exams');
    }

    private setCreateMode() {
        this.model = new CreateExamModel();
    }

    private async setEditMode() {
        let examToUpdate = await this.examsService.getExam(this.examToUpdateId);

        let updateModel: UpdateExamModel = {
            name: examToUpdate.name,
            description: examToUpdate.description
        };

        this.model = updateModel;
    }
}