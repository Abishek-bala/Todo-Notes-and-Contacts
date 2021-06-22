import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { note } from 'src/app/models/notes-Message';
import { NotesItemsService } from 'src/app/services/notes-items.service';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})



export class DisplayNotesComponent implements OnInit {

  notes: note[] = []
  todoItems: Item[] = []

  constructor(private notesItemService: NotesItemsService, private todoItemService: TodoItemsService) {}

  getNotesItems(){
    this.notes = this.notesItemService.getNotes();
  }

  getTodoItems(){
    this.todoItems = this.todoItemService.getItems();
  }

  onJobDone(item: Item){
    item.done = false;
    this.todoItemService.filterItems();
  }

  ngOnInit(): void {
    this.getNotesItems();
    this.getTodoItems();      
  }


}
