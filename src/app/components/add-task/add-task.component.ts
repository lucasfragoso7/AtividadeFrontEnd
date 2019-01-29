import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  assingment:string ;
  constructor(private serviceTask:TaskServiceService) { }

ngOnInit() {
}

add(){
    let date:Date = new Date();
    this.serviceTask.addTask(this.assingment,date);
}

}
