import { Component, OnInit } from '@angular/core';
import { PhoneBook } from './phonebook';
import { PhoneService } from './phonebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  contacts:PhoneBook[];
  contact:PhoneBook;
  search:string;
  phoneService: PhoneService
  constructor(private routes:Router) 
  {
     this.phoneService = new PhoneService();
     this.contacts = this.phoneService.getContacts();
  }
  CreateContact()
  {
    this.contact = new PhoneBook();
    this.phoneService.addContacts(this.contact);
  }
 
  AddContactbutton()
  {
    this.routes.navigate(["/contact"]);
  }
  
  delContact()
  {
    this.phoneService.deleteContact();
  }
  
  

  ngOnInit(): void {
  }
  
}
