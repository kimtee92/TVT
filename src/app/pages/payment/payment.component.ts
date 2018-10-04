import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Violation } from '../../shared/_models/violation';
import { ViolationService } from '../../shared/_services/violation.service';
import { Globals } from '../../shared/globals';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  settle: Violation[] = [];
  tableData: Array<any>;
  id: any[] = [];  
  total: number=0;
  number: number=0;
  pageSize = 10;
  pageNumber = 1;

  constructor(private violationService: ViolationService,
              private router: Router,
              private globals: Globals) { }

  ngOnInit() {
    this.settle = this.globals.pending;
    this.loadData();
    for (let item of this.settle) {
      console.log('ID: ' + item.id + ' ' +item.fine.$numberDecimal);
      this.total = this.total + Number(item.fine.$numberDecimal);
      this.id.push(item.id);
    }
  }

  loadData() {
    this.number = this.settle.length;
    this.tableData = this.settle;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  onClickPay() {
    console.log('Pay button');
    this.violationService.pay(this.id)
      .pipe(first())
      .subscribe(
        data => {
          swal({
            type: 'success',
            title: 'Payment Success!',
            text: '',
          }).then(() => {
            this.router.navigate(["/pages/"]);
          });
        },
        error => {
          swal({
            type: 'error',
            title: 'Payment Error',
            text: error,
          });
        });
  }
}