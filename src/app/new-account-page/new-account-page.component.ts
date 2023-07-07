import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createUserDTO } from 'src/services/user';
import { UserService } from 'src/services/userService';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.css']
})
export class NewAccountPageComponent 
{
  constructor(private service: UserService, private router: Router) { };

  email: string = "";
  username: string = "";
  senha: string = "";

  passwordChanged(event: any) {
    this.senha = event;
  }

  CriarConta() 
  {
    var user: createUserDTO = {
      email: this.email,
      password: this.senha,
      username: this.username
    }

    this.service.signUp(user)
       .subscribe((res) => {
        console.log(res);
       })

    this.router.navigate(['/'])
  }
}