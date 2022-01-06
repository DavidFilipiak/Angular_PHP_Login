import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SocialUser } from 'angularx-social-login';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TokenVerificationService {

  constructor(private http: HttpClient) { }

  postData(user: SocialUser){
    //pošle POST request na backend php server a vráti odpoveď
    return this.http.post('http://localhost:8000', {data: user}, httpOptions);
  }
}
