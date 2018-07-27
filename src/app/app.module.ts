import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material Module
import { MaterialModule } from "../app/shared/material.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Froms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDateAdapter } from "./adapter/AppDateAdapter";
//Material design modules

import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule, 
  MatGridListModule, 
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatToolbarModule, 
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  DateAdapter,
  MAT_DATE_FORMATS} from '@angular/material';
//Routes 

import {RouterModule, Routes } from '@angular/router';

//Firebase configuration

import { AngularFireModule } from "angularfire2";
import { environment} from "../environments/environment";
import { AngularFireDatabaseModule } from "angularfire2/database";

//Services 
import { FirebaseService } from "./services/firebase.service";

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BussinesDetailsComponent } from './components/bussines-details/bussines-details.component';
import { BussinesAddComponent } from './components/bussines-add/bussines-add.component';
import { BussinesEditComponent } from './components/bussines-edit/bussines-edit.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';


const appRoutes:Routes=[

  {path:'',component:HomeComponent},
  {path:'bussines-details',component:BussinesDetailsComponent},
  {path:'bussines-add',component:BussinesAddComponent},
  {path:'bussines-edit/:id',component:BussinesEditComponent},
  {path:'add-category',component:AddCategoryComponent}
]
export const APP_DATE_FORMATS =
{
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BussinesDetailsComponent,
    BussinesAddComponent,
    BussinesEditComponent,
    AddCategoryComponent,

 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatToolbarModule, 
    MatProgressSpinnerModule,
    MatTabsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [FirebaseService ,{ provide: DateAdapter, useClass: AppDateAdapter},{provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
