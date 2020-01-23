import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private temp:HttpClient){ }

  setreg(x)
  {
  
   return this.temp.post("http://localhost:8080/Mylogin/Register",x);
 
  }
  
  
}
