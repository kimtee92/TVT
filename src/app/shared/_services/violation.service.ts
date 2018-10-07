import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Globals } from '../globals';
import { Violation } from '../_models';

@Injectable()
export class ViolationService {
    private api: string;

    constructor(private http: HttpClient,
                private globals: Globals) { 
                    this.api = globals.api;
                }

    getByLicense(license: string) {
        return this.http.get<Violation[]>(this.api + `/violations/view/` + license);
    }

    getByLicenseAll(license: string) {
        return this.http.get<Violation[]>(this.api + `/violations/history/` + license);
    }

    pay(id: number[]=[]) {
        console.log(this.api);
        
        return this.http.get(this.api + `/violations/paybyid/` + id);
    }
}