import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  name = 'teste';
  isVisible = true;


  columns = [
    { name: 'To Do', id: 'toDo' },
    { name: 'In Progress', id: 'trabalhando' },
    { name: 'Done', id: 'finalizado' },
  ];

  @Input() tasks: Task[] = [];
  @Output() handleTask = new EventEmitter();

  tasksFiltradas: Task[] = [];

  ngOnInit() {
    this.tasksFiltradas = this.tasks;
  }


  selectedTask(task: Task) {
    this.handleTask.emit(task);
  }

  handleFiltro(filtro: string) {
    if (filtro === 'all') {
      this.tasksFiltradas = this.tasks;
      return;
    }

    this.tasksFiltradas = this.tasks.filter((item) => {
      if (item.status === filtro) {
        return item;
      }
      return;
    });
  }
}

