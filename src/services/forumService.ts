import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { forum } from './forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  get()
  {
    return this.http.get<forum[]>("http://localhost:5195/forum")
  }

  filter(nome:string|null)
  {
    return this.http.get<forum[]>("http://localhost:5195/forum/" + nome)
  }
}