import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import{MatDialog} from '@angular/material';
  import { from } from 'rxjs';
import { EditComponent } from './edit/edit.component';

@Injectable({
  providedIn: 'root'
})
export class ServletService {
  // editData(value: any) {
  //   throw new Error("Method not implemented.");
  // }

  private _url="http://localhost:8080/Mylogin/Register";
  constructor(private _http:HttpClient) { }

  register(userdata)
  {
    return this._http.post<any>(this._url,userdata);
  }

  viewdata()
  {
    return this._http.get("http://localhost:8080/Mylogin/view");
  }
  editData(id)
  {
    return this._http.post("http://localhost:8080/Mylogin/edit",id);
  }

  deleteData(cid)
  {
    return this._http.post("http://localhost:8080/Mylogin/Delete",cid);
  }
 
}
