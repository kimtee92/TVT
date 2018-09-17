import { Component, OnInit } from '@angular/core';
import { TablesDataService } from './tablesData.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-violations',
  templateUrl: './violations.component.html',
  styleUrls: ['./violations.component.scss'],
  providers: [TablesDataService]
})
export class ViolationsComponent implements OnInit {
  tableData: Array<any>;

  pageSize = 10;
  pageNumber = 1;

  constructor(
    private _tablesDataService: TablesDataService,
    private router: Router,) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.tableData = this._tablesDataService.DATA;
  }

  onSubmit() {    
    console.log("go to payment");
    this.router.navigate(["/pages/payment"]);
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
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