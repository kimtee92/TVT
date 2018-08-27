import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Driver } from '../_models';
import { Globals } from '../globals';

@Injectable()
export class DriverService {
    private api: string;

    constructor(private http: HttpClient, 
                private  globals: Globals) { 
                    this.api = globals.api;
                }

    getAll() {
        return this.http.get<Driver[]>(this.api+`/drivers`);
    }

    getById(id: number) {
        return this.http.get(this.api+`/drivers/` + id);
    }

    register(driver: Driver) {
        return this.http.post(this.api+`/drivers/register`, driver);
    }

    update(driver: Driver) {
        return this.http.put(this.api+`/drivers/` + driver.id, driver);
    }

    delete(id: number) {
        return this.http.delete(this.api+`drivers/` + id);
    }
}