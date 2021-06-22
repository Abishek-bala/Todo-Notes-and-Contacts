import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['./show-contacts.component.scss']
})
export class ShowContactsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  contacts = [
    {
    userName: '',
    userEmail:'',
    userContactNumber:''
  }]


  ngOnInit(): void {
    this.contacts = JSON.parse(""+localStorage.getItem("contacts"));
    console.log(this.contacts)
  }

}
