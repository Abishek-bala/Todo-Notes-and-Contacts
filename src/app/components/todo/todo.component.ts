import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { TodoItemsService } from '../../services/todo-items.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit {

  constructor(private TodoItemsService: TodoItemsService) {}

  ngOnInit(): void {
    this.getTodoItems();
  }

  items: Item[] = [];
  

  getTodoItems(){
    this.items = this.TodoItemsService.getItems();
    
  }

  getDate(): string{
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    let today = new Date();
    console.log(today);
    let created = today.getDate().toString() + " " + monthNames[today.getMonth()] + " " + today.getFullYear().toString();
    console.log(created);
    return created;
  }

  addItem(){
    let tempItem: Item = {
      description: (<HTMLInputElement>document.getElementById("addItemInput")).value,
      done:true,
      author: (<HTMLInputElement>document.getElementById("addAuthor")).value,
      createdOn: this.getDate()
    }
    this.TodoItemsService.addItem(tempItem);
  }
  
}



