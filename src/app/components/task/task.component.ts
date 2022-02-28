import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  @Input() task: Task;
  constructor(public taskService: TaskServiceService) {
   this.task ={
     title:'',
    description:'',
    hide: true
   }
    
   }

  ngOnInit(): void {
    
  }
  deleteTask(task: Task){
    if(confirm('¿Estas seguro de eliminar el regisro?')){
      this.taskService.deleteTask(task);
    }
  }

}
