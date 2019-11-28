import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  emps : any
  constructor(private serive : EmployeeService) { }

  ngOnInit() {
    var selectResult = this.serive.Select();
    selectResult.subscribe((result)=>{
      console.log(result);
      this.emps = result;      
    });
   }

}
