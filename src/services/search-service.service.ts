import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  sortOrder : string;

  constructor(private client : HttpClient) { }

  onSubmitService(user : string,page:unknown){
    return this.client.get("https://api.github.com/search/users?q=".concat(user).concat("&page=").concat(page as string));
  }

  getUserInfo(userName : string ,){
    return this.client.get("https://api.github.com/users/"+userName);
  }


  sortService(user : string, order : boolean){
    
    if(order == true)
    {
      this.sortOrder="desc";
    }
    else
    {
      this.sortOrder="asc";
    }
    return this.client.get("https://api.github.com/search/users?q=".concat(user).concat("&sort=score&order=").concat(this.sortOrder));
  }

}
