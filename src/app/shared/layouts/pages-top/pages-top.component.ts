import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Driver } from '../../_models/driver';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent {
  currentUser: Driver;
  avatarImgSrc: string = 'assets/images/avatar.png';

  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _globalService: GlobalService) { 
                this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
              }

  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }
}
