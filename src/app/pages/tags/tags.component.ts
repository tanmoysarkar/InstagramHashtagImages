import { Component, OnInit } from '@angular/core';
import { InstaProfileDataService } from '../../services/insta-profile-data.service';
@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  
  constructor(private instaProfileDataService:InstaProfileDataService) {
    
  }
  ngOnInit() {
     
  }



}
