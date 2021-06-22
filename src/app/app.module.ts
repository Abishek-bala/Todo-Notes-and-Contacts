import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { NotesComponent } from './components/notes/notes.component';
import { RouterModule } from '@angular/router';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowContactsComponent } from './components/show-contacts/show-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
     TodoComponent,
    NotesComponent,
    DisplayNotesComponent,
    AddContactsComponent,
    ShowContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([
      { path: 'todo', component: TodoComponent  },
      { path: 'notes', component: NotesComponent  },
      { path: 'display-All', component: DisplayNotesComponent },
      { path: 'add-contacts', component: AddContactsComponent},
      { path: 'show-contacts', component: ShowContactsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
