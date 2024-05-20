import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    { Id: 1, FirstName: 'Emmanuel', LastName: 'Martinez', PhoneNumber: '09690227888', Address: 'Taguig' },
    { Id: 2, FirstName: 'Steven', LastName: 'Villarosa', PhoneNumber: '1234567890', Address: 'Philippines' },
    { Id: 3, FirstName: 'Geneva', LastName: 'Urizar', PhoneNumber: '0987654321', Address: 'Muntinlupa' }
  ]

  constructor() { }

  getContacts() {
    return this.contacts;
  }

  createContact(newContact: Contact) {

    // finding highest Id
    let highestId = 0;
    this.contacts.forEach(contactObject => {
      if (contactObject.Id > highestId) {
        highestId = contactObject.Id;
      }
    })

    // adding new contact to array
    this.contacts.push(
      {
        Id: highestId + 1,
        FirstName: newContact.FirstName,
        LastName: newContact.LastName,
        PhoneNumber: newContact.PhoneNumber,
        Address: newContact.Address
      }
    );

  }

  updateContact(updateContact: Contact) {
    const index = this.contacts.findIndex(contact => contact.Id == updateContact.Id);
    this.contacts[index].FirstName = updateContact.FirstName;
    this.contacts[index].LastName = updateContact.LastName;
    this.contacts[index].PhoneNumber = updateContact.PhoneNumber;
    this.contacts[index].Address = updateContact.Address;
  }

  deleteContact(id: number) {
    const index = this.contacts.findIndex(contact => contact.Id == id);
    this.contacts.splice(index, 1);
  }
}
