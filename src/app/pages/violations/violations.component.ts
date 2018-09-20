import { Component, OnInit } from '@angular/core';
import { TablesDataService } from './tablesData.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Violation } from '../../shared/_models/violation';
import { Driver } from '../../shared/_models/driver';
import { first } from 'rxjs/operators';
import { ViolationService } from '../../shared/_services/violation.service';

@Component({
  selector: 'app-violations',
  templateUrl: './violations.component.html',
  styleUrls: ['./violations.component.scss'],
  providers: [TablesDataService]
})
export class ViolationsComponent implements OnInit {
  tableData: Violation[];
  currentUser: Driver;
  licenseNo: string;
  pageSize = 10;
  pageNumber = 1;

  constructor(
    private _tablesDataService: TablesDataService,
    private violationService: ViolationService,
    private router: Router,
  ) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.licenseNo = this.currentUser.licenseNo;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.violationService.getByLicense(this.licenseNo).pipe(first()).subscribe((tableData: Violation[]) => {
      this.tableData = tableData;
      console.log(JSON.stringify(this.tableData));
    });
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