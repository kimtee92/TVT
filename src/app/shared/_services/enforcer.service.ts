import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Globals } from '../globals';
import { Enforcer } from '../_models';

@Injectable()
export class EnforcerService {
    private api: string;

    constructor(private http: HttpClient,
                private globals: Globals) { 
                    this.api = globals.api;
                }

    getAll() {
        return this.http.get<Enforcer[]>(`/enforcers`);
    }

    getById(id: number) {
        return this.http.get(this.api + `/enforcers/` + id);
    }

    register(enforcer: Enforcer) {
        return this.http.post(this.api + `/enforcers/register`, enforcer);
    }

    update(enforcer: Enforcer) {
        return this.http.put(this.api + `/enforcers/` + enforcer.id, enforcer);
    }

    delete(id: number) {
        return this.http.delete(this.api + `/enforcers/` + id);
    }
    
}