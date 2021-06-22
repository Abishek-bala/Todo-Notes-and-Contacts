import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { note } from 'src/app/models/notes-Message';
import { NotesItemsService } from 'src/app/services/notes-items.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private notesItemService: NotesItemsService) {}

  ngOnInit(): void {
    this.getNotesItems();
  }

  notes: note[] = []

  getNotesItems(){
    this.notes = this.notesItemService.getNotes();
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

  addNote(){
    let newNote: note = {
      message: (<HTMLInputElement>document.getElementById("addNoteInput")).value,
      author: (<HTMLInputElement>document.getElementById("addNoteAuthor")).value,
      createdOn: this.getDate()
    }
    this.notesItemService.addNote(newNote);  
  }

}
