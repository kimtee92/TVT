import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { TablesDataService } from './tablesData.service';

@Component({
  selector: 'app-issueticket',
  templateUrl: './issueticket.component.html',
  styleUrls: ['./issueticket.component.scss'],
  providers: [TablesDataService]
})

export class IssueticketComponent implements OnInit {
  ticketForm: FormGroup;
  tableData: Array<any>;

  pageSize = 10;
  pageNumber = 1;

  constructor(private _tablesDataService: TablesDataService,
  private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadData();
    this.ticketForm = this.formBuilder.group({
      violation: [''],
      fine: [''],
      remarks: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketForm.controls; }

  loadData() {
    this.tableData = this._tablesDataService.DATA;
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