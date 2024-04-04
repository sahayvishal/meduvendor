import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  partyForm: FormGroup;
  showOptionalFields: boolean = false;
  countryCodeDisabled: boolean = true;


  constructor(private formBuilder: FormBuilder) {
    this.partyForm = this.formBuilder.group({
      partyName: ['', Validators.required],
      countryCode: ['+91'],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      partyType: ['', Validators.required],
      gstin: [''],
      billingAddress: this.formBuilder.group({
        flat: [''],
        locality: [''],
        pincode: [''],
        city: [''],
        state: [''],
      }),
      shippingSameAsBilling: [false],
    });
  }

  get partyType() {
    return this.partyForm.get('partyType');
  }

  ngOnInit() { }

  toggleOptionalFields() {
    this.showOptionalFields = !this.showOptionalFields;
  }

  addParty() {
    if (this.partyForm.valid) {
      // Implement logic to add the party (e.g., send data to backend)
      console.log(this.partyForm.value);
    } else {
      // Handle form validation errors
      console.log('Form is not valid');
    }
  }

}
