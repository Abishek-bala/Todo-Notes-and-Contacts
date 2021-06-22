import { Injectable } from '@angular/core';
import { note } from '../models/notes-Message';

@Injectable({
  providedIn: 'root'
})
export class NotesItemsService {

  constructor() { }

  Notes = [
    { message: '', author: '', createdOn:''}
  ];

  getNotes(): note[] {
    this.Notes = JSON.parse(""+localStorage.getItem("stored-notes"));
    return this.Notes;
  }

  addNote(newNote: note) {
    this.Notes.push(newNote)
    localStorage.setItem("stored-notes",JSON.stringify(this.Notes));
  }
}
