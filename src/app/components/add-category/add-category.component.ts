import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category;
  constructor(  private firebaseService: FirebaseService) { }

  ngOnInit() {
  }
  submitAdd(){
    console.log(this.category);
    this.firebaseService.addCategory(this.category);
  }

}
