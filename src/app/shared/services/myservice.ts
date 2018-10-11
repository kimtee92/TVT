import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

import { Driver } from '../_models/driver';

@Injectable()
export class MyService {
    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    myMethod(data :Driver) {
        this.myMethodSubject.next(data);
    }
}