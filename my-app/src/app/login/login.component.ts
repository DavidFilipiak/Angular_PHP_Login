import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { FrontendData } from '../frontendData';
import { TokenVerificationService } from '../token-verification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: SocialAuthService, private router: Router, private verificationService: TokenVerificationService) { }

  signIn() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.verificationService.postData(user).subscribe(res => {
          console.log(res);
          FrontendData.postResponse = res;
          FrontendData.user = user;
          this.router.navigateByUrl('/home');
        }
      );
    });
  }

}
