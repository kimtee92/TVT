import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Driver } from '../../shared/_models/driver';
import { DriverService } from '../../shared/_services';
import { Globals } from '../../shared/globals';

@Component({
  selector: 'app-scandriver',
  templateUrl: './scandriver.component.html',
  styleUrls: ['./scandriver.component.scss']
})
export class ScanDriverComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  currentDriver: Driver;
  driverForm: FormGroup;
  pageSize = 10;
  pageNumber = 1;

  @HostListener('window:beforeunload') onBeforeUnload() {
    console.log('leaving');
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private globals: Globals) {
    this.currentDriver = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.driverForm = this.formBuilder.group({
      driver: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.driverForm.controls; }

  onSubmit() {
    this.globals.driver = this.driverForm.value.driver;
    this.driverService.getByLicense(this.globals.driver).pipe(first()).subscribe((tableData: Driver) => {
      this.currentDriver = tableData;
    });
    this.globals.profile = this.currentDriver;
    //this.router.navigate(["/pages/issueticket"]);
  }

}