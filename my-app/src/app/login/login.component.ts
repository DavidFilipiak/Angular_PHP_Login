import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { FrontendData } from '../frontendData';
import { TokenVerificationService } from '../token-verification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  response:any = {success:false};
  errMessage: string = "";

  constructor(private authService: SocialAuthService, private router: Router, private verificationService: TokenVerificationService) { }

  signIn() {
    //otvorí prihlasovacie okno a pošle vybraný účet backendu na overenie
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {

      this.verificationService.postData(user).subscribe(res => {

          this.response = res;
          FrontendData.postResponse = res;
          FrontendData.user = user;
          if(this.response.success == true){
            this.router.navigateByUrl('/home');
          }
          else{
            this.errMessage = "Sign in unsuccessful. Try again."
          }
        },
        (err) => {
          console.log(err);
          this.errMessage = err.message;
        }
      );
    });
  }

}
