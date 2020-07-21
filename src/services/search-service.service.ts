import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private client : HttpClient) { }

  onSubmitService(user : string){
    return this.client.get("https://api.github.com/search/users?q="+user);
  }

  getUserInfo(userName : string){
    return this.client.get("https://api.github.com/users/"+userName);
  }


  sortService(user : string, order : string){
    return this.client.get("https://api.github.com/search/users?q=".concat(user).concat("&sort=score&order=").concat(order));
  }

}
