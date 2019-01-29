import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  tasks:Array<Task>;
  constructor(private serviceTask:TaskServiceService) { 
  }
  ngOnInit() {
    this.tasks = this.serviceTask.gtasks;
  }
  remove(task:Task){
      this.serviceTask.delTask(task);
      this.ngOnInit();
  }
}
