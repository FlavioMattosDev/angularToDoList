import { Component, OnInit } from '@angular/core';

export interface IListTask {
  title: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listTask: IListTask[] = [];
  teste = true;

  constructor() {}

  ngOnInit() {
    this.listTask.push({
      date: new Date(),
      description: 'Descrição Teste',
      title: 'Titulo Teste'
    })
  }

  onAddTask(task: IListTask) {
    this.listTask.push(task);
  }

  hide() {
    this.teste = !this.teste;
  }
}
