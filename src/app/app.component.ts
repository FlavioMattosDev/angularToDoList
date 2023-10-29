import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'treinoTODO'
  listTask: Task[] = [];
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
