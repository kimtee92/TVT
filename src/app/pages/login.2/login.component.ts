import { Component, OnInit } from '@angular/core';
import { Word } from '../../shared/_models/word';
import { AuthenticationService } from '../../shared/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class Login2Component implements OnInit {
  currentWord: Word;
  constructor(private AuthenticationService: AuthenticationService ) { 
    console.log("www " + JSON.parse(sessionStorage.getItem('word')));
    this.currentWord = JSON.parse(sessionStorage.getItem('word'));
  }
  ngOnInit() { }
}
