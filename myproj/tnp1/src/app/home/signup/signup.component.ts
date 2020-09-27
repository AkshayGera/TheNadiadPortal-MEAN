import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RegisterService} from '../shared/register.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [RegisterService]
})
export class SignupComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
      if(form)
      {
          form.reset();
      }
      this.registerService.selectedRegister = {
        _id: "",
        name: "",
        age: null,
        email: "",
        password: ""
      }

  }

  onSubmit(form : NgForm)
  {
    this.registerService.postRegister(form.value).subscribe((res) => {

      this.resetForm(form);
    });
  }

}
