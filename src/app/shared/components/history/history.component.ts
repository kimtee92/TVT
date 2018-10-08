import { Component, OnDestroy } from '@angular/core';
import { Violation } from '../../_models';
import { MyService } from '../../_services/myservice';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnDestroy {
  subscription: Subscription;
  tableData: any[];
  pageSize = 10;
  pageNumber = 1;

  constructor(private myService: MyService) {
    this.subscription = this.myService.violationMethod$.subscribe((data: Violation[]) => {
      this.tableData = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
