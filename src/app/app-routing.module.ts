import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { PasswordComponent } from './password/password.component';
import { NewAccountPageComponent } from './new-account-page/new-account-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RecoverPageComponent } from './recover-page/recover-page.component';
import { MainComponent } from './main/main.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CreateForumComponent } from './create-forum/create-forum.component';

const routes: Routes = 
[
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'addpost', component: AddPostComponent },
      { path: 'createforum', component: CreateForumComponent },

    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'newpassword', component: CreatePasswordComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'login/:newaccount', component: NewAccountPageComponent },
  { path: 'newaccount', component: NewAccountPageComponent },
  { path: "recover/:email", title: "Recuperar Senha", component: RecoverPageComponent },
  { path: '**', component: NotFoundPageComponent },
  { path: "recover", component: RecoverPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
