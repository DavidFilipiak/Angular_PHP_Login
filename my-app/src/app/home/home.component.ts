import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { User } from '../loggedUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: SocialUser;

  constructor() { }

  ngOnInit(): void {
    this.user = User.user;
  }

}
