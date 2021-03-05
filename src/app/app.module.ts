import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterProviderComponent } from './register-provider/register-provider.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ProviderHomePageComponent } from './provider-home-page/provider-home-page.component';
import { PracticeComponent } from './practice/practice.component';
import { AuthService } from './services/auth.service'
import { AuthGuardService } from '../app/services/auth-guard.service';
import { NavbarComponent } from './navbar/navbar.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    RegisterProviderComponent,
    UserHomePageComponent,
    ProviderHomePageComponent,
    PracticeComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '**', component: ProviderHomePageComponent },
      { path: '', component: LoginComponent },
      { path: 'registerUser', component: RegisterUserComponent },
      { path: 'registerProvider', component: RegisterProviderComponent },
      { path: 'userHomePage', component: UserHomePageComponent, canActivate: [AuthGuardService] },
      { path: 'providerHomePage', component: ProviderHomePageComponent, canActivate: [AuthGuardService] }

    ])
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
