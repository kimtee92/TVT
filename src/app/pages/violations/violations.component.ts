import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Violation } from '../../shared/_models/violation';
import { Driver } from '../../shared/_models/driver';
import { first } from 'rxjs/operators';
import { ViolationService } from '../../shared/services/violation.service';
import swal from 'sweetalert2';
import { Globals } from '../../shared/globals';

@Component({
  selector: 'app-violations',
  templateUrl: './violations.component.html',
  styleUrls: ['./violations.component.scss']
})
export class ViolationsComponent implements OnInit {
  tableData: Violation[];
  currentUser: Driver;
  licenseNo: string;
  pageSize = 10;
  pageNumber = 1;
  settle: Violation[] = [];
  total: number = 0;
  number: number = 0;

  constructor(
    private violationService: ViolationService,
    private router: Router,
    private globals: Globals
  ) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.licenseNo = this.currentUser.licenseNo;
  }

  ngOnInit() {
    swal({
      title: 'Please wait',
      text: 'Loading data',
    });
    swal.showLoading();
    this.loadData();
  }

  // load blank data to initialise table
  loadData() {
    this.violationService.getByLicense(this.licenseNo).pipe(first()).subscribe((tableData: Violation[]) => {
      this.tableData = tableData;
      swal.close();
    });
  }

  onSubmit() {
    this.router.navigate(["/pages/payment"]);
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  checkValue(event: any, pending: Violation) {
    var index = this.settle.findIndex(function (item, i) {
      return item.id === pending.id
    });
    if (event.target.checked) {
      // if checked push row data to settle array and add total fine to pay
      this.settle.push(pending);
      this.total = this.total + Number(pending.fine);
    } else {
      // if unchecked remove row data in settle array and substract fine to pay
      this.settle.splice(index, 1);
      this.total = this.total - Number(pending.fine);
    }
    this.number = this.settle.length;
    this.globals.pending = this.settle;
  }
  
}