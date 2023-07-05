import { Component } from '@angular/core';
import { post } from 'src/services/post';
import { PostService } from 'src/services/postService';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css']
})
export class ForumPageComponent {
  posts: post[] = []
  members: post[] = []

  constructor(
    private service: PostService,
  ) { }

  ngOnInit(): void {
    this.infoPost(),
    this.infoPost2teste()
  }

  infoPost() {
    this.service.get().subscribe(resp => this.posts = resp)
  }

  infoPost2teste()
  {
    this.service.get().subscribe(resp => this.members = resp)
  }

  effect(text: string | null) 
  {
    alert(text)
  }
}
