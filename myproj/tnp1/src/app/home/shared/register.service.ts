import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Register } from './register.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  selectedRegister: Register;
  registers: Register[];
  readonly baseURL = 'http://localhost:3000/register/';
  constructor(private http : HttpClient) { }

  postRegister(r : Register)
  {
      return this.http.post(this.baseURL, r);
  }
}
