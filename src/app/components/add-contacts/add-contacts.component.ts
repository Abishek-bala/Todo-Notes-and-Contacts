import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contactModel';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {

  form:FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(3)]),
      contacts: this.fb.array([])
    });
  }
  
  ngOnInit() {
    
  }

  contactBook: ContactModel[] =[];

  createContact(): FormGroup {
    
    return this.fb.group({
      email: '',
      contactNumber: ''
    });
  }
  addContacts(): void {
    const contacts = this.form.get('contacts') as FormArray;
    const s = this.createContact();
    console.log(this.form);
    contacts.push(s);
  }

  showContacts(){
    for (let newValue of this.form.controls.contacts.value){
      let newcontact: ContactModel = {
        userName: (<HTMLInputElement>document.getElementById("userName")).value,
        userEmail: newValue.email ,
        userContactNumber: newValue.contactNumber
      }
      this.contactBook.push(newcontact);
    }
    localStorage.setItem("contacts",JSON.stringify(this.contactBook));
  }

  removeContact(i:number) {
    this.contacts.removeAt(i);
  }

  get contacts(){
    return this.form.get("contacts") as FormArray;
  }

}
