import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Globals } from '../../shared/globals';
import { ViolationService } from '../../shared/_services/violation.service';

@Component({
  selector: 'app-issueticket',
  templateUrl: './issueticket.component.html',
  styleUrls: ['./issueticket.component.scss']
})

export class IssueticketComponent implements OnInit {
  ticketForm: FormGroup;
  tableData: any[];

  pageSize = 10;
  pageNumber = 1;

  constructor(private formBuilder: FormBuilder,
              private globals: Globals,
              private violationService: ViolationService,) { }

  ngOnInit() {
    console.log('second: '+this.globals.driver);
    //this.loadData();
    this.ticketForm = this.formBuilder.group({
      violation: [''],
      fine: [''],
      remarks: [''],
    });
    this.violationService.getByLicenseAll(this.globals.driver).pipe(first()).subscribe((tableData: any[]) => {
      this.tableData = tableData;
    });
    console.log(this.tableData);
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketForm.controls; }

  loadData() {
    //this.tableData = this._tablesDataService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  onSubmit(){

  }
  
}