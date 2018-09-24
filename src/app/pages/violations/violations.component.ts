import { Component, OnInit } from '@angular/core';
import { TablesDataService } from './tablesData.service';
import { Router } from '@angular/router';
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
  settle: Violation[] = [];
  total: number=0;
  number: number=0;

  constructor(
    private violationService: ViolationService,
    private router: Router,
  ) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.licenseNo = this.currentUser.licenseNo;
  }

  ngOnInit() {
    sessionStorage.removeItem('pending');
    console.log('loading');
    this.loadData();
  }

  loadData() {
    this.violationService.getByLicense(this.licenseNo).pipe(first()).subscribe((tableData: Violation[]) => {
      this.tableData = tableData;
      console.log('loading done');
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
      this.settle.push(pending);
      this.total = this.total + Number(pending.fine.$numberDecimal);
    } else {
      this.settle.splice(index, 1);
      this.total = this.total - Number(pending.fine.$numberDecimal);
    }
    this.number = this.settle.length;
    sessionStorage.setItem('pending', JSON.stringify(this.settle));
  }
}