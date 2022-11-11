import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../infertface';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @Input() currentToDoList: Todo[] = [];
  newItem:Todo ={task:"", completed:false};
 
  constructor() { }

  toDoList: Todo[] = [
    { task: "Go to class", completed: true },
    { task: "Drink coffee", completed: true },
    { task: "Get a headache", completed: true },
    { task: "Take Excedrin", completed: true },
    { task: "Do a lab", completed: false },
    { task: "study", completed: false },
    { task: "Space out on couch", completed: true }
  ];

  addATodo() {
    this.newItem.task =(<HTMLInputElement>document.getElementById("task")).value;
    this.toDoList.push(this.newItem);
   
  }
 
  deleteATodo(i: number): void {
    this.toDoList.splice(i, 1);
  }
  
  
  ngOnInit(): void {
  }

}
