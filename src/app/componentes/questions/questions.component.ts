import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const titleQuestions: Element[] = Array.from(document.querySelectorAll('.questions__title'));
    console.log(titleQuestions)

    titleQuestions.forEach((question: Element) =>{
        question.addEventListener('click', ()=>{
            let height: number = 0;
            let answer: HTMLElement | null = question.nextElementSibling as HTMLElement | null;
            let addPadding: HTMLElement | null = question.parentElement?.parentElement as HTMLElement | null;

            if (addPadding) {
                addPadding.classList.toggle('questions__padding--add');
            }

            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer && answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            if (answer) {
                answer.style.height = `${height}px`;
            }
        });
    });


  }

}
