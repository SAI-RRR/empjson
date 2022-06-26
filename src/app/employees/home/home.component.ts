import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allEmployees:Employees[]=[];
  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
  this.get();
  }
get()
{
  this.employeeService.get().subscribe((data)=>{
    this.allEmployees=data;
  });
}
}
