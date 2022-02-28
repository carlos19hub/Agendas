import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public TaskService : TaskServiceService) { }

  ngOnInit(): void {
  }

  addTask(t:HTMLInputElement, d: HTMLTextAreaElement){
    this.TaskService.addTask({
      title: t.value,
      description: d.value,
      hide: true
    });
    t.value ='';
    d.value ='';
    t.focus();//Poner foco en el primer control
    return false;
  }

}
