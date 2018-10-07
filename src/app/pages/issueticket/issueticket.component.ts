import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Globals } from '../../shared/globals';
import { Violation } from '../../shared/_models/violation';
import { ViolationService } from '../../shared/_services/violation.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-issueticket',
  templateUrl: './issueticket.component.html',
  styleUrls: ['./issueticket.component.scss']
})

export class IssueticketComponent implements OnInit {
  ticketForm: FormGroup;
  tableData: any[];
  currentTable: Violation[] = [];

  pageSize = 10;
  pageNumber = 1;

  constructor(
    private formBuilder: FormBuilder,
    private globals: Globals,
    private violationService: ViolationService,
    private router: Router, ) { }

  ngOnInit() {
    //this.loadData();
    this.ticketForm = this.formBuilder.group({
      licenseNo: [''],
      violation: [''],
      enforcerId: ['test'],
      fine: [''],
      remarks: ['']
    });
    if (!this.globals.driver) {
      this.router.navigate(['/pages/scandriver']);
    } else {
      this.violationService.getByLicenseAll(this.globals.driver).pipe(first()).subscribe((tableData: any[]) => {
        this.tableData = tableData;
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketForm.controls; }

  loadData() {
    //this.tableData = this._tablesDataService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  onSubmit() {
    this.ticketForm.value.licenseNo = this.globals.driver;
    this.ticketForm.value.enforcerId = this.globals.driver;
    this.currentTable.push(this.ticketForm.value);
  }

  onClickSubmit() {

    this.violationService.issueViolations(this.currentTable)
      .pipe(first())
      .subscribe(
        data => {
          swal({
            type: 'success',
            title: 'Violation(s) are saved',
            text: '',
          });
          this.router.navigate(['/pages/scandriver']);
        },
        error => {
          swal({
            type: 'error',
            title: 'Save error!',
            text: error,
          });
        });

  }

  onClickRemoveLast() {
    this.currentTable.splice(this.currentTable.length - 1, 1);
  }

}