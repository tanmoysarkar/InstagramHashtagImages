import { Component, OnInit, Input } from '@angular/core';
import { InstaProfileDataService } from '../../services/insta-profile-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  posts:Post;
  tags:string;
  pics:Pic;
  constructor(private instaProfileDataService:InstaProfileDataService, private _router: Router) {
    this.posts = {
      id: '',
      username: '',
      name:'',
      dp:'',
      bio:''
    }
    this.tags = ''
    this.pics = {
      url: ''
    }
  }

  ngOnInit() {
    // this._router.navigate(['home']);
    // try{
    this.instaProfileDataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  // }
    // catch(err){
    //   this._router.navigate(['home']);
    // } 

  }
  onClick(value){
    this.instaProfileDataService.getTags(value).subscribe((tags) => {
      this.tags = tags;
    });
    this.instaProfileDataService.getTags(value).subscribe((pics) => {
      this.pics = pics;
    });

  }
}
interface Post{
  id: string,
  username:string,
  name:string,  
  dp:string,
  bio:string
}
interface Pic{
  url:string
}