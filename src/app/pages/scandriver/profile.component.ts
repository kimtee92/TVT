import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
    console.log("enter scan driver");
    
   }

  onSubmit() {    
    console.log("going to issue ticket");
    this.router.navigate(["/pages/issueticket"]);
  }

}
