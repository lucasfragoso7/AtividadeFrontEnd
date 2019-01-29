import { Task } from '../models/task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskServiceService {
  tasks:Array<Task> = new Array<Task>();

  constructor() { }
  
  addTask(task:string, date:Date){
    let currentTask : Task = new Task(this.tasks.length,task ,  date)
    this.tasks.push(currentTask);
  }

  editTask(newTask:Task){

   this.tasks.forEach(TaskModule =>  {
     if(TaskModule.id == TaskModule.id){
       TaskModule=newTask;
     }
   });
  }

  getTask(nUser:Task):Task{
    let variabTask :Task;
    this.tasks.forEach(TaskModule=>{
      if(TaskModule.id == nUser.id){
        variabTask = TaskModule;
      }
    })
    return variabTask;
  }
  get gtasks(): Array<Task> {
    return this.tasks
  }


  delTask(nUser:Task){
    this.tasks.splice(this.tasks.indexOf(nUser),1);
   }
}
