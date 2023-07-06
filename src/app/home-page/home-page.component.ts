import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { post } from 'src/services/post';
import { PostService } from 'src/services/postService';
import { forum } from 'src/services/forum';
import { ForumService } from 'src/services/forumService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']

})
export class HomePageComponent implements OnInit {

  posts: post[] = []

  forum: forum[] =[]
  
  forumName: string = "";

  constructor
  (
    private service: PostService,
    private serviceForum: ForumService
  ) { }

  ngOnInit(): void 
  {
    this.infoPost() 
    this.infoForum()
  }

  infoPost() 
  {
    this.service.get().subscribe(resp => this.posts = resp)
  }

  infoForum()
  {
    this.serviceForum.filter(this.forumName).subscribe(resp => this.forum = resp)
  }
}
