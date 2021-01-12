import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    email: [null, Validators.required],
    number: [null, Validators.required],
    message: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  onSubmit() {
    alert('Thanks!');
  }
}
