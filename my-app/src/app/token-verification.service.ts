import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SocialUser } from 'angularx-social-login';
import { map } from 'rxjs';

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
    return this.http.post('http://localhost:8000/backend.php', {data: user}, httpOptions);
  }
}
