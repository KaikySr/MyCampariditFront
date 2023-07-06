import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get()
  {
    return this.http.get<user[]>("http://localhost:5195/user")
  }
}