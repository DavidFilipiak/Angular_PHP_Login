import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class TokenVerificationService {

  constructor(private http: HttpClient) { }

  postData(user: SocialUser){
    return this.http.post('backend.php', {data: user});
  }
}
