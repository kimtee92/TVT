import { Component, OnInit } from '@angular/core';
import { Enforcer } from '../../shared/_models';
import { first } from 'rxjs/operators';
import { MyService } from '../../shared/_services/myservice';
import { ViolationService } from '../../shared/_services/violation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  currentUser: any;
  tableData: any[];
  pageSize = 10;
  pageNumber = 1;

  constructor(
    private myService: MyService,
    private violationService: ViolationService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
}

  ngOnInit() {
    this.myService.myMethod(JSON.parse(sessionStorage.getItem('currentUser')));
    this.violationService.getByLicenseAll(this.currentUser.enforcerNo).pipe(first()).subscribe((tableData: any[]) => {
      this.tableData = tableData;
    });
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
