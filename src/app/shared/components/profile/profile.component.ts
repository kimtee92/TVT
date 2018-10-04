import { Component, OnDestroy } from '@angular/core';
import { Driver } from '../../_models/driver';
import { MyService } from '../../../shared/_services/myservice'
import { TablesDataService } from './tablesData.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [TablesDataService]
})
export class ProfileComponent implements OnDestroy {
  avatarImgSrc: string = 'assets/images/avatar.png';
  currentUser: Driver = this.tabledataservice.DATA;
  subscription: Subscription;

  constructor(private myService: MyService,
    private tabledataservice: TablesDataService, ) {
    this.subscription = this.myService.myMethod$.subscribe((data: Driver) => {
      this.currentUser = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
