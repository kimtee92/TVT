import { Component, OnInit } from '@angular/core';
import { Driver } from '../../_models/driver';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  currentUser: Driver;
  userName: string = 'John Smith';
  userPost: string = 'johnsmith';
  
  constructor() { 
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
