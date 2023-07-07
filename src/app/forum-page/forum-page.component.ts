import { Component } from '@angular/core';
import { post } from 'src/services/post';
import { PostService } from 'src/services/postService';
import { forum } from 'src/services/forum';
import { ForumService } from 'src/services/forumService';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css']
})
export class ForumPageComponent {
  posts: post[] = []
  members: post[] = []

  forum: forum[] =[]
  forumName: string = "";

  constructor(
    private service: PostService,
    private serviceForum: ForumService
  ) { }

  ngOnInit(): void {
    this.infoPost(),
    this.infoMembers(),
    this.infoForum()
  }

  infoPost() {
    this.service.get().subscribe(resp => this.posts = resp)
  }

  infoForum()
  {
    this.serviceForum.filter(this.forumName).subscribe(resp => this.forum = resp)
  }
  
  infoMembers()
  {
    this.service.get().subscribe(resp => this.members = resp)
  }


}
