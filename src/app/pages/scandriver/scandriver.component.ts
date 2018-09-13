import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Driver } from '../../shared/_models/driver';

@Component({
  selector: 'app-scandriver',
  templateUrl: './scandriver.component.html',
  styleUrls: ['./scandriver.component.scss']
})
export class ScanDriverComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  currentUser: Driver;

  tableData: Array<any>;

  pageSize = 10;
  pageNumber = 1;

  constructor(
    private router: Router,) {
      this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
     }

  

  ngOnInit() {}

  onSubmit() {    
    console.log("go to payment");
    this.router.navigate(["/pages/issueticket"]);
  }

}
/*
import { Component, OnInit } from '@angular/core';
import { TablesDataService } from './tablesData.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [TablesDataService]
})
export class DataTableComponent implements OnInit {
  tableData: Array<any>;

  pageSize = 10;
  pageNumber = 1;

  constructor(private _tablesDataService: TablesDataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.tableData = this._tablesDataService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}

*/