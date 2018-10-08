import { Component, OnInit } from '@angular/core';
import { Driver } from '../../shared/_models/driver';
import { first } from 'rxjs/operators';
import { MyService } from '../../shared/_services/myservice';
import { ViolationService } from '../../shared/_services/violation.service';
import { Violation } from '../../shared/_models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: Driver;
  tableData: Violation[];

  constructor(
    private myService: MyService,
    private violationService: ViolationService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
}

  ngOnInit() {
    this.myService.myMethod(JSON.parse(sessionStorage.getItem('currentUser')));
    this.violationService.getByLicenseAll(this.currentUser.licenseNo).pipe(first()).subscribe((tableData: Violation[]) => {
      this.tableData = tableData;
    });
    console.log(this.tableData.values);
  }

}
