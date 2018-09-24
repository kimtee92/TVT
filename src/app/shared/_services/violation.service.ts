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

    // getAll() {
    //     return this.http.get<Violation[]>(`/violations`);
    // }

    // getById(id: number) {
    //     return this.http.get(this.api + `/violations/` + id);
    // }

    getByLicense(license: string) {
        return this.http.get<Violation[]>(this.api + `/violations/view/` + license);
    }

    // register(driver: Violation) {
    //     return this.http.post(this.api + `/violations/register`, driver);
    // }

    // update(driver: Violation) {
    //     return this.http.put(this.api + `/violations/` + driver.id, driver);
    // }

    delete(id: number[]=[]) {
        console.log(id);
        return this.http.delete(this.api + `/violations/deletebyid/` + id);
    }
}