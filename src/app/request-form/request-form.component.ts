import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  public formData: FormGroup;

  constructor(
    public crud: CrudService,
    public fb: FormBuilder,
    private db: AngularFireDatabase
  ) { }

  hello = this.db.database.ref();

  ngOnInit() {
    this.crud.GetCustomersList();
    this.customerForm();
  }

  customerForm() {
    this.formData = this.fb.group({
      userId: ['123'],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      message: [null, Validators.required],
    });
  }

  get firstName() {
    return this.formData.get('firstName');
  }
  get lastName() {
    return this.formData.get('lastName');
  }
  get email() {
    return this.formData.get('email');
  }
  get number() {
    return this.formData.get('number');
  }
  get message() {
    return this.formData.get('message');
  }

  onSubmit() {
    console.log(this.formData.value);
    // this.hello.set(this.formData.value);
    this.crud.AddCustomer(this.formData.value);

    alert('Thanks!');
  }
}
