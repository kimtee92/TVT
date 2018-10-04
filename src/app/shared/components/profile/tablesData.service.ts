import { Injectable } from '@angular/core';

@Injectable()
export class TablesDataService {
    constructor() { }

    DATA =
        {
            id: 0,
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            gender: '',
            nationality: '',
            licenseNo: '',
            contactNo: '',
            email: '',
            address: '',
        };
}
