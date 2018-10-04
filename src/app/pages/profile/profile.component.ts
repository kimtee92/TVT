import { Component, OnInit } from '@angular/core';
import { Driver } from '../../shared/_models/driver';
import { MyService } from '../../shared/_services/myservice'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  currentUser: Driver;

  constructor(private myService: MyService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
}

  ngOnInit() {
    this.myService.myMethod(JSON.parse(sessionStorage.getItem('currentUser')));
  }

}
