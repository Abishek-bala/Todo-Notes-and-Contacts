import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  constructor() { }

  Items = [
    { description: '', author: '', createdOn:"", done: false }
  ];

  getItems(): Item[]{
    this.Items = JSON.parse(""+localStorage.getItem("stored-items"));
    return this.Items;
  }

  addItem(newItem: Item) {
    this.Items.push(newItem);
    localStorage.setItem("stored-items",JSON.stringify(this.Items));
  }

  filterItems(){
    this.Items = this.Items.filter(item => item.done === true);
    console.log(this.Items);
    localStorage.setItem("stored-items",JSON.stringify(this.Items));
  }
}
