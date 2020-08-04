import { PhoneBook } from './phonebook';

export class  PhoneService
{
    private contacts: PhoneBook[];
    private contactSearch: PhoneBook[];

    constructor()
    {
        this.contacts = [];
        this.contactSearch = [];
        var contact1, contact2,contact3, contact4;
        contact1 = new PhoneBook();
        contact1.name = "Eric Elliot"
        contact1.phone = 2225556575;
        this.contacts.push(contact1);
        contact2 = new PhoneBook();
        contact2.name = "Steve Jobs"
        contact2.phone = 2204546754;
        this.contacts.push(contact2);
        contact3 = new PhoneBook();
        contact3.name = "Fred Allen"
        contact3.phone = 2106579886;
        this.contacts.push(contact3);
        contact4 = new PhoneBook();
        contact4.name = "Bill Gates"
        contact4.phone = 2345679789;
        this.contacts.push(contact4);    
    }
    getContacts()
    {
        return this.contacts;
    }
    addContacts(c:PhoneBook)
    {
        this.contacts.push(c);
    }
    deleteContact()
    {
        this.contacts.pop();
    }
   
}
