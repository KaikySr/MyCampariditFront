import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordComponent } from './password/password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { NewAccountPageComponent } from './new-account-page/new-account-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RecoverPageComponent } from './recover-page/recover-page.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MainComponent } from './main/main.component';


@NgModule(
{
  declarations: 
  [
    AppComponent,
    NavComponent,
    HomePageComponent,
    LoginPageComponent,
    PasswordComponent,
    CreatePasswordComponent,
    NewAccountPageComponent,
    NotFoundPageComponent,
    RecoverPageComponent,
    MainComponent,
  ],

  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule, 
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
