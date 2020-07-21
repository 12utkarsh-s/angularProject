import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchValue : string;
  user : any;
  userList : any[];
  sortOrder : string="desc";

  constructor(private service: SearchServiceService) { }

  ngOnInit(): void {
    // console.log(this.searchValue)
  }

  onSubmit(){
    this.service.onSubmitService(this.searchValue).subscribe((result : any) => {
      this.userList=result.items;

    })
  }

  getUserInfo(){
    this.service.getUserInfo(this.user).subscribe((result : any) => {
      this.user=result;
    })
  }

  sort(){
    
    this.service.sortService(this.searchValue,this.sortOrder).subscribe((result : any) =>{
      this.userList=result.items;
    })
  }

}
