import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InstaProfileDataService {
  constructor(public http:Http) { }

  getPosts(){
    return this.http.get('http://localhost:8080/getProfileData')
    .map(res => res.json());
  }
  getTags(value){
    return this.http.get('http://localhost:8080/searchTagData?value='+value)
    .map(res => res.json());
  }

}
