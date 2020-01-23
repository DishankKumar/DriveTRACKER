import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDriveComponent } from './create-drive/create-drive.component'
import { ViewDriveComponent } from './view-drive/view-drive.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path:'create',component:CreateDriveComponent},
  {path:'view',component:ViewDriveComponent},
  {path:'edit/:id',component:EditComponent,pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
