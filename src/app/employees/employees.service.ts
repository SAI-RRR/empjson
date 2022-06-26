import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employees } from './employees';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) 
  {
    
  }
  get() {
    return this.http.get<Employees[]>('http://localhost:3000/employees');
  }
}
