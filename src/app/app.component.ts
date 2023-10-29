import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'treinoTODO'
  listTask: Task[] = [
    {
      title: 'Teste 01',
      description: 'Texto aqui 01',
      date: new Date(),
      status: 'toDo'
  },
    {
      title: 'Teste 02',
      description: 'Texto aqui 02',
      date: new Date(),
      status: 'trabalhando'
  },
    {
      title: 'Teste 03',
      description: 'Texto aqui 03',
      date: new Date(),
      status: 'finalizado'
  },
];

  selectedTask: Task | null = null;

  onAddTask(task: Task) {
    this.listTask.push(task);
  }

  handleTask(task: Task) {
    this.selectedTask = task;
  }

  fecharDetalhes() {
    this.selectedTask = null;
  }

}
