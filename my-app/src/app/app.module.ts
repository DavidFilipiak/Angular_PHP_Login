import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent}
    ]),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '760139251567-oggptc8ibfhupeuqbunjp21gmfk431pr.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
