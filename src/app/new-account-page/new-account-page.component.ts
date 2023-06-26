import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.css']
})
export class NewAccountPageComponent 
{
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(4)
  ]);
  
}