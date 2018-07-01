import { ExamModel } from "./exam-model";
import { ExamExerciseModel } from "./exam-exercise-model";

export class ExamDetailsModel extends ExamModel {
    exercises: ExamExerciseModel[];
}