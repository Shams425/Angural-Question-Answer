import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionServices } from 'src/app/shared/question-services.service';
import { Question } from 'src/app/shared/question.model';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss'],
})
export class ShowQuestionComponent implements OnInit {
  @Input('Qvalue') questionValue: any;
  @Input('Avalue') answerValue: any;

  @Output('questionEdit') qEdit: EventEmitter<void> = new EventEmitter();
  @Output('questionDelete') qDelete: EventEmitter<void> = new EventEmitter();
  questions: Question[] = [];

  constructor(private Qservices: QuestionServices) {}

  ngOnInit(): void {
    this.Qservices.getQuestions();
  }

  editClick() {
    this.qEdit.emit();
  }

  deleteClick() {
    this.qDelete.emit();
  }
}
