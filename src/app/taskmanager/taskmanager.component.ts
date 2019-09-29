import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
  
  constructor() { }
  public task;
 
  public tasks = [];
  
  i=0;
  log()
  {
    console.log(this.task);
    this.tasks[this.i]=this.task;
    this.i++;
    console.log(this.tasks);
  }
  deletetask(){
    this.tasks.shift();
  }
  ngOnInit() {
     
  }

  

}
