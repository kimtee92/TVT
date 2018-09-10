import { Component, OnInit } from '@angular/core';
import { Driver } from '../../shared/_models/driver';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  currentUser: Driver;

  
  constructor() { 
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
