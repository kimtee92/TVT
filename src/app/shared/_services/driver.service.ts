import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Driver } from '../_models';

@Injectable()
export class DriverService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Driver[]>(`http://localhost:3000/drivers`);
    }

    getById(id: number) {
        return this.http.get(`http://localhost:3000/drivers/` + id);
    }

    register(driver: Driver) {
        return this.http.post(`http://localhost:3000/drivers/register`, driver);
    }

    update(driver: Driver) {
        return this.http.put(`http://localhost:3000/drivers/` + driver.id, driver);
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:3000/drivers/` + id);
    }
}