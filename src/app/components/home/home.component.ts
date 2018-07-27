import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { FirebaseService } from '../../services/firebase.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pageTitle: "Main";
  displayedColumns = ['name', 'category','email','cel','featured','id'];
  totalAmount: number;
  busineses: any;
  allBussinesses: any;
  dataSource:any;

  constructor(private firebaseService: FirebaseService) { 
    
  }

  ngOnInit() {
    this.firebaseService.getBussinesses().subscribe(bussinesses => {
      this.freshDataList(bussinesses);
      
      //this.dataSource = new MatTableDataSource<any>(this.allBussinesses);
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  freshDataList(busineses: any[]) {
    this.allBussinesses = busineses;
 
    this.totalAmount = this.allBussinesses.length;
    this.dataSource = new MatTableDataSource(this.allBussinesses);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
