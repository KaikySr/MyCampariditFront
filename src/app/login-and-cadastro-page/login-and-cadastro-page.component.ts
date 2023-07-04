import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-and-cadastro-page',
  templateUrl: './login-and-cadastro-page.component.html',
  styleUrls: ['./login-and-cadastro-page.component.css']
})
export class LoginAndCadastroPageComponent {
  email = ""
  link = ""
  password = ""

  constructor(private router: Router) { }

  passwordChanged(event: any)
  {
    this.password = event
  }

  novaConta : boolean = false
  loginn : boolean = true

  displayNovaConta = () => {
    this.novaConta = true
    this.loginn = false
  }

  displayLogin = () => {
    this.loginn = true
    this.novaConta = false
  }

  login() 
  {
    // Aqui precisariamos fazer essa verificação no banco de dados
    if (this.email == "don" && this.password == "123") {
      // Isso evidentemente não é seguro, mas a ideia é bom e será melhorada no futuro
      sessionStorage.setItem('user', 'donplatinado');
      this.router.navigate(["/"])
    }
  }

}
