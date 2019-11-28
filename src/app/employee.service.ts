import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
  url = "http://localhost:8888/emps";
  
  Select(){
    return this.http.get(this.url);
  }

}
