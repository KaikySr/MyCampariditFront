import { Component, OnInit } from '@angular/core';
import { post } from 'src/services/post';
import { PostService } from 'src/services/postService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']

})
export class HomePageComponent implements OnInit {

  posts: post[] = []

  constructor(
    private service: PostService,
  ) { }

  ngOnInit(): void {
    this.infoPost()
  }

  infoPost() {
    this.service.get().subscribe(resp => this.posts = resp)
  }

}
