import { Component, OnInit } from '@angular/core';
import { ServletService } from '../servlet.service';
import { EditComponent } from '../edit/edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-drive',
  templateUrl: './view-drive.component.html',
  styleUrls: ['./view-drive.component.css']
})
export class ViewDriveComponent implements OnInit {

  data:any[];
  constructor(private Ser:ServletService, private m:MatDialog) { }

  ngOnInit() {

     this.Ser.viewdata().subscribe((e:any)=>{this.data=e});
  }

  deleteData(cid)
  {
    alert("Successfully Deleted");
    return this.Ser.deleteData(cid).subscribe();
  }
  updateDial(id)
  {
    this.m.open(EditComponent,{data:{i:id}});
  }

}
