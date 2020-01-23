import { Component, OnInit } from '@angular/core';


import {FormGroup,FormControl,Validators} from '@angular/forms';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userform:FormGroup;
  countries=['India','USA','Germany', 'Italy','Frence'];


  constructor(private temp:DemoService) { }

  ngOnInit() {
    this.userform=new FormGroup(
      {
        name:new FormControl('',[Validators.required,Validators.minLength(3)]),
        pass:new FormControl('',[Validators.required,Validators.minLength(5)]),
        mail:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
        gender:new FormControl(),
        country: new FormControl(),
        mobile: new FormControl('',[Validators.required]),
      });
    }
    adddata()
    {
      // let trend=JSON.parse(localStorage.getItem("first"));
      // if(trend==null)
      // {
      //   trend=[];
      // }
      // trend.push(this.userform.value);
      // localStorage.setItem("first",JSON.stringify(trend));
        alert("inside subscribe")
      this.temp.setreg(this.userform.value).subscribe();
    }
  

}
