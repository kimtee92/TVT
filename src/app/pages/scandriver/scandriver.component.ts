import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Driver } from '../../shared/_models/driver';
import { DriverService } from '../../shared/services';
import { Globals } from '../../shared/globals';
import { TablesDataService } from './tablesData.service';
import { MyService } from '../../shared/services/myservice'
import swal from 'sweetalert2';
import { clipboard } from '../../clipboard';

@Component({
  selector: 'app-scandriver',
  templateUrl: './scandriver.component.html',
  styleUrls: ['./scandriver.component.scss'],
  providers: [TablesDataService]
})
export class ScanDriverComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  currentDriver: Driver;
  driverForm: FormGroup;
  submitted = false;
  pageSize = 10;
  pageNumber = 1;

  constructor(
    private router: Router,
    private myService: MyService,
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private tabledataservice: TablesDataService,
    private globals: Globals) {
    this.currentDriver = this.tabledataservice.DATA;
    this.myService.myMethod(this.currentDriver);
  }

  ngOnInit() {
    this.driverForm = this.formBuilder.group({
      driver: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^[0-9]*$")]]
    });
    clipboard();
  }

  // convenience getter for easy access to form fields
  get f() { return this.driverForm.controls; }

  onClickIssue() {
    if (this.submitted) {
      this.router.navigate(["/pages/issueticket"]);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.driverForm.invalid) {
      return;
    }    
    this.globals.driver = this.driverForm.value.driver;
    this.driverService.getByLicense(this.globals.driver).pipe(first()).subscribe(
      (tableData: Driver) => {
        this.currentDriver = tableData;
        this.myService.myMethod(tableData);
      },
      error => {
        swal({
          type: 'error',
          title: 'No Data Found',
        });
        this.submitted = false;
      });
  }

}