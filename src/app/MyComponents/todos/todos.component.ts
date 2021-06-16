import { Component, OnInit } from '@angular/core';
import { Todo } from"../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() {
    this.todos = [
      {
        sno:1,
        title:"This is title1",
        description:"Description",
        active:true
      },
      {
        sno:2,
        title:"This is title2",
        description:"Description",
        active:true
      },
      {
        sno:3,
        title:"This is title3",
        description:"Description",
        active:true
      },
    ]
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log(todo);
  }

}
