import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

import { Driver, Violation } from '../../shared/_models';

@Injectable()
export class MyService {
    myMethod$: Observable<any>;
    violationMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();
    private violationMethodSubject = new Subject<any>();

    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
        this.violationMethod$ = this.violationMethodSubject.asObservable();
    }

    myMethod(data :Driver) {
        this.myMethodSubject.next(data);
    }

    violationMethod(data: Violation[]) {
        this.violationMethodSubject.next(data);
    }
}