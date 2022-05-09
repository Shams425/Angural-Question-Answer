import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionServices {
  question: Question[] = [];
  questions: Question;

  constructor() {}

  getQuestions() {
    return this.question;
  }

  getQuestion(id: any) {
    return this.question[id];
  }

  addQuestion(form: FormGroup) {
    this.question.push(form.value);
  }

  QUpdate(id: any, form: FormGroup) {
    const question = this.getQuestion(id);
    Object.assign(question, form.value);
  }

  Qdelete(id: number) {
    return this.question.splice(id, 1);
  }
}
