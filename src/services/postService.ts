import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  get()
  {
    return this.http.get<post[]>("http://localhost:5195/post")
  }
}