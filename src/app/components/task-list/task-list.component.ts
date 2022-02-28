import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(public servicio: TaskServiceService) { 
    this.tasks = this.servicio.getTask();
  }

  ngOnInit(): void {
  }

}
