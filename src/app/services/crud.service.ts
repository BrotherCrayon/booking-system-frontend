import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

export interface Customer {
  $key: string;
  firstName: string;
  lastName: string;
  email: string;
  number: Number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  customers: AngularFireList<any>;    // Reference to Customer data list, its an Observable
  customer: AngularFireObject<any>;   // Reference to Customer object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Customer
  AddCustomer(customer: Customer) {
    this.customers.push({
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      number: customer.number,
      message: customer.message
    })
  }

  // Fetch Single Customer Object
  GetCustomer(id: string) {
    this.customer = this.db.object('customers-list/' + id);
    return this.customer;
  }

  // Fetch Customers List
  GetCustomersList() {
    this.customers = this.db.list('customers-list');
    return this.customers;
  }

  // Update Customer Object
  UpdateCustomer(customer: Customer) {
    this.customer.update({
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      number: customer.number,
      message: customer.message
    })
  }

  // Delete Customer Object
  DeleteCustomer(id: string) {
    this.customer = this.db.object('customers-list/' + id);
    this.customer.remove();
  }

}