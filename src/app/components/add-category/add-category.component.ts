import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category;
  constructor(  private firebaseService: FirebaseService,
    private router:Router) { }

  ngOnInit() {
  }
  submitAdd(){
    
    this.firebaseService.addCategory(this.category);
    this.router.navigate(['/']);
  }

}
