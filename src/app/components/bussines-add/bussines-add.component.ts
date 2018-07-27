import { Component, OnInit, NgModule } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormControlName,
  ReactiveFormsModule
} from "@angular/forms";
import { Router } from "@angular/router";



@Component({
  selector: 'app-bussines-add',
  templateUrl: './bussines-add.component.html',
  styleUrls: ['./bussines-add.component.css'],

})

@NgModule ({
  
  imports: [
    FormBuilder,
    ReactiveFormsModule,
    FormControl,
    FormArray,
    Validators,
    FormControlName,
    FormGroup,
    FirebaseService,
  
  ]
})


export class BussinesAddComponent implements OnInit {
  categoryForm= new FormControl();
  allCategories: any;
  bussines;
  category;
  description;
  email;
  facebook;
  longitude;
  latitude;
  logo;
  phonenr;
  tags;
  website;
  openhours;
  featured;
  mapdata;
  openAt;
  closedAt;
  photo1;
  photo2;
  photo3;
  pictures;

  constructor(
    private firebaseService: FirebaseService,
    private router:Router
  
  ) { }

  ngOnInit() {
    this.firebaseService.getCategories().subscribe(categories =>{
      this.allCategories = categories;
    })     
  }
  submitAdd(){
    
    let bussines ={
      category:this.getCategorySelect(),
      description: this.description,
      drupal:"",
      email:this.email,
      facebookPage: this.isDefindedOrNull(this.facebook),
      featured:this.featured,
      logo: this.isDefindedOrNull(this.logo),
      mapdata:{
        annotation:[   {     
            latitude:this.isDefindedOrNull(this.latitude),
            longitude:this.isDefindedOrNull(this.longitude),
            title:this.bussines
            }
          ]
      },
      name:this.bussines,
      officeLocation: this.isDefindedOrNull(this.latitude)+" , "+this.isDefindedOrNull(this.longitude),
      openhours:this.getOpenHours(this.openAt,this.closedAt),
      phoneNumber: this.phonenr,
      pictures:[this.photo1,this.photo2,this.photo3],
      tags:this.getTags(this.tags),
      wordpress:this.isDefindedOrNull(this.website)
    }
    
    
    this.firebaseService.addBussines(bussines);
    this.router.navigate(['/']);
  }
  getCategorySelect(){
    this.allCategories = this.categoryForm.value;
    return this.allCategories;
  }
  
  isDefindedOrNull(variable){
    if(variable==null || variable ==undefined)
    return "";
    return variable;
  }

  getOpenHours(openAt,closedAt){
    var days =[];
    var retVar ={
      days: days,
      zone:1
    }
    var temp;
    for(var i =0; i<7; i++){
      temp ={
        closedAt:closedAt,
        day: i+1,
        openAt:openAt
      }
      days.push(temp)
    }
    return retVar;
  }
  getTags(tags){
    tags = this.isDefindedOrNull(tags);
    if(tags.split(",").length >1)
      return tags.split(',')   
    return tags;
  }
}
