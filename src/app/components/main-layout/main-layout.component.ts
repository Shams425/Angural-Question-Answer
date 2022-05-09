import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionServices } from 'src/app/shared/question-services.service';
import { Question } from 'src/app/shared/question.model';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  QuestionForm: FormGroup;
  questions: Question[] = [];
  questionNum: number;
  showUpdate: boolean = false;
  showSubmit: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private questionServices: QuestionServices
  ) {}

  ngOnInit(): void {
    this.QuestionForm = this.formBuilder.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
    });
    this.questions = this.questionServices.getQuestions();
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) return;
    this.questionServices.addQuestion(form);
    this.QuestionForm.reset();
  }

  formReset() {
    this.QuestionForm.reset();
  }

  onEditClick(id: number) {
    this.QuestionForm.controls['question'].setValue(
      this.questions[id].question
    );
    this.QuestionForm.controls['answer'].setValue(this.questions[id].answer);
    this.questionNum = id;

    this.showUpdate = true;
    this.showSubmit = false;
  }

  onDeleteClick(id: number) {
    return this.questionServices.Qdelete(id);
  }

  updateQuestion(form: FormGroup) {
    this.questionServices.QUpdate(this.questionNum, form);
    this.QuestionForm.reset();

    this.showUpdate = false;
    this.showSubmit = true;
  }
}
