import { Component, OnInit } from '@angular/core';
import { Violation } from '../../shared/_models/violation';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  settle: Violation[] = JSON.parse(sessionStorage.getItem('pending')) || [];
  tableData: Array<any>;

  pageSize = 10;
  pageNumber = 1;

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.tableData = this.settle;
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