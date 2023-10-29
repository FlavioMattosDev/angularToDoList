import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss']
})
export class TaskFormReactiveComponent {
  @Output() addTask = new EventEmitter();

  public newTask = new Task();

  public formTask: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', Validators.required],
    date: ['', [Validators.required]],
    status: ['toDo', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  submitTask() {
    if (this.formTask.invalid) return;
    this.addTask.emit(this.formTask.value);
    this.formTask.reset();
  }
}
