import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'right-config',
  templateUrl: './right-config.component.html',
  styleUrls: ['./right-config.component.scss']
})
export class RightConfigComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() { }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
