import { Component, OnInit } from '@angular/core';
import { Driver } from '../../_models/driver';
import { Globals } from '../../globals';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  currentUser: Driver;
  
  constructor(private globals: Globals) { 
    this.currentUser = this.globals.profile || JSON.parse(sessionStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }
  
}
