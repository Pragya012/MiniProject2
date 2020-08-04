import { Component, OnInit } from '@angular/core';
import { PhonebookComponent } from '../phonebook/phonebook.component';
import { PhoneBook } from "../phonebook/phonebook";
import { PhoneService } from '../phonebook/phonebook.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:PhoneBook;
  contacts:PhoneBook[];
  phoneService:PhoneService;
  constructor() { 
    this.phoneService = new PhoneService();
    this.contact = new PhoneBook();
    this.contacts = this.phoneService.getContacts();
  }
  CreateContact()
  {
    this.phoneService.addContacts(this.contact);
    this.contact = new PhoneBook();
  }
 
  ngOnInit(): void {
  }

}
