import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Violation } from './_models/violation';

@Injectable()
export class Globals {
  api: string = environment.api;
  driver: string = '';
  pending: Violation[] = [];
}