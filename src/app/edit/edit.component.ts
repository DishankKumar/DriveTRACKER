import { Component, OnInit, Inject } from '@angular/core';
import { ServletService } from '../servlet.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  viewDrives:any[];
  singleDrive:any;
  id:number;
  editform:FormGroup;


 

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,private _ser:ServletService) { }
  
  ngOnInit() {

    this.id=this.data.i;
    //this.id = this._ar.snapshot.params['id'];
    console.log(this.id);
    this._ser.viewdata().subscribe((e:any)=>{this.viewDrives=e;
    
    for(let i=0; i<this.viewDrives.length; i++)
    {
      if(this.viewDrives[i].id==this.id)
      {
        this.singleDrive=this.viewDrives[i];
      }
    }
    console.log(this.singleDrive);

    });

  


//for edit purpose

      this.editform=new FormGroup({
      id:new FormControl(this.id,[Validators.required]),
      companyname:new FormControl('',[Validators.required]),
      resource:new FormControl('',[Validators.required]),
      exp:new FormControl('',[Validators.required]),
      ctc:new FormControl('',[Validators.required]),
      joining:new FormControl('',[Validators.required]),
      bond:new FormControl('',[Validators.required]),
      position:new FormControl('',[Validators.required]),
      education:new FormControl('',[Validators.required]),
      followup: new FormControl('',[Validators.required]),
     
      });

}
update() 
{

  this._ser.editData(this.editform.value).subscribe();
  console.log(this.editform.value);
  alert("Drive Updated Successfully");
}

}
