import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { user } from 'src/services/user';
import { createUserDTO } from 'src/services/user';
import { UserService } from 'src/services/userService';


@Component(
{
  selector: 'app-login-page-component',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})

export class LoginPageComponent
{
  email: string = "";
  username: string ="";
  password: string = "";
  service: any;

  constructor(private router: Router) { }

  passwordChanged(event: any)
  {
    this.password = event
  }

  // testee() 
  // {
  //   // Aqui precisariamos fazer essa verificação no banco de dados
  //   if (this.email == UserService. && this.password == "123") {
  //     // Isso evidentemente não é seguro, mas a ideia é bom e será melhorada no futuro
  //     sessionStorage.setItem('user', 'donplatinado');
  //     this.router.navigate(["/"])
  //   }
  // }

  // Login() 
  // {
  //   var user: createUserDTO = {
  //     email: this.email,
  //     password: this.password,
  //     username: this.username
  //   }

  //   this.service.login(user)
  //      .subscribe((res) => {
  //       console.log(res);
  //      })

  //   this.router.navigate(['/'])
  // }

}
