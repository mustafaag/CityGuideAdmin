import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList }  from 'angularfire2/database'
import { FirebaseListObservable, FirebaseObjectObservable }  from 'angularfire2/database-deprecated'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  bussinesses: FirebaseListObservable<any[]>;
  categories:Observable<any[]>;
  bussinesToAd: AngularFireList<any[]>;
  categorys: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) { 
   
    }

  getBussinesses(){
    this.bussinesses = this.db.list('/businesses').valueChanges() as FirebaseListObservable<any[]>;
    console.log(this.bussinesses);
    return this.bussinesses;   
  }
  getCategories(){
    this.categories = this.db.list('/categories').valueChanges() as Observable<any[]>;
    return this.categories;
  }
  addBussines(bussinesDetail){
    var filtered = JSON.parse(JSON.stringify(bussinesDetail));
    this.bussinesToAd = this.db.list('/businesses');
    
    return this.bussinesToAd.push(filtered);
  }

  addCategory(categoryName){
    if(categoryName!= "" && categoryName !=undefined && categoryName != null){
      this.categorys = this.db.list('/categories').valueChanges() as FirebaseListObservable<any[]>;
     this.db.object("/categories/"+categoryName).set(categoryName);
    }
  }






}
