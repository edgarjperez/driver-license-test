import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Question } from '../shared/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  questions: Question[];

  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

}
