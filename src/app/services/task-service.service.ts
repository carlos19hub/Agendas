import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  
tasks: Task[];
  constructor() { 
    this.tasks = [];
  }


getTask(){
  if(localStorage.getItem('tareas')===null){
    return this.tasks;
  }else{
    this.tasks = JSON.parse(localStorage.getItem('tareas')!);
    return this.tasks;
  }
}

addTask(task : Task){
  this.tasks.push(task);//Agrega al arreglo en memoria RAM
  let tasks: Task[] = [];
  if(localStorage.getItem('tareas')===null){
    tasks.push(task);//en el arreglo
    localStorage.setItem('tareas',JSON.stringify(tasks));//Guarda en localStorage
  }else{
    tasks = JSON.parse(localStorage.getItem('tareas')!);
    tasks.push(task);//en el arreglo
    localStorage.setItem('tareas',JSON.stringify(tasks));
  }
}
deleteTask(task: Task){
  for (let i = 0; i < this.tasks.length; i++) {
    if(task == this.tasks[i]){
      this.tasks.splice(i,1);//elimina del arreglo
      localStorage.setItem('tareas',JSON.stringify(this.tasks));
    }
    
  }
}
}