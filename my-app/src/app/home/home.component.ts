import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { FrontendData } from '../frontendData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: SocialUser;
  response:any;

  constructor() { }

  ngOnInit(): void {
    this.user = FrontendData.user;
    this.response = FrontendData.postResponse;
  }

}
