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

  // myControl = new FormControl<string | User>('');
  // options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  // filteredOptions: Observable<User[]>;

  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => {
  //       const name = typeof value === 'string' ? value : value?.name;
  //       return name ? this._filter(name as string) : this.options.slice();
  //     }),
  //   );
  // }

  // displayFn(user: User): string {
  //   return user && user.name ? user.name : '';
  // }

  // private _filter(name: string): User[] {
  //   const filterValue = name.toLowerCase();

  //   return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  // }

}
