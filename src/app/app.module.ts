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
import { FormsModule, FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MainComponent } from './main/main.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CreateForumComponent } from './create-forum/create-forum.component';

import { HttpClientModule } from '@angular/common/http';
import { ForumPageComponent } from './forum-page/forum-page.component';
import { LoginAndCadastroPageComponent } from './login-and-cadastro-page/login-and-cadastro-page.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';

import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';




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
    AddPostComponent,
    CreateForumComponent,
    ForumPageComponent,
    LoginAndCadastroPageComponent,
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
    HttpClientModule,
    MatMenuModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,

  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
