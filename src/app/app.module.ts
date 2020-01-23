import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDriveComponent } from './create-drive/create-drive.component';
import { ViewDriveComponent } from './view-drive/view-drive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
//import { FormComponent } from './form/form.component';
//import { ReactiveformComponent } from './FormControl/reactiveform.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { EditComponent } from './edit/edit.component';
//import { ParagComponent } from './parag/parag.component';
//import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDriveComponent,
    ViewDriveComponent,
    RegistrationComponent,
   // FormComponent,
    //ReactiveformComponent,
    FormcontrolComponent,
   EditComponent,
   //ParagComponent,
   //ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
