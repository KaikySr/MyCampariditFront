import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { createUserDTO, user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get()
  {
    return this.http.get<user[]>("http://localhost:5195/user")
  }

  signUp(data: createUserDTO) {
    return this.http.post<user>("http://localhost:5195/user/signup", data);
  }

  login(data: createUserDTO){
    return this.http.post<user>("http://localhost:5195/user/login", data);
  }
}