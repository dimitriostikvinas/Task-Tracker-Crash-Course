import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {} //Dependency Injection: inject an instance of TaskService into the component.

  ngOnInit(): void {
    // lifecycle hook in Angular that is called after the component's constructor and after the first ngOnChanges
    // good place to put initialization logic for the component
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks)); // implies synch operation, you should normally use Observables here for async
  }
}
