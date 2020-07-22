import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchValue : string;
  user : any;
  userList : any[];
  sortOrder : boolean = true;
  currPage : any;
  notEmpty = true;
  notScroll = true;
  page = 1;

  constructor(private service: SearchServiceService,private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    // console.log(this.searchValue)
  }

  onSubmit(){
    this.page = 1;
    this.service.onSubmitService(this.searchValue,this.page).subscribe((result : any) => {
      this.userList=result.items;
      this.page++;
    })
  }

  getUserInfo(userInfo : string){
    this.service.getUserInfo(userInfo).subscribe((result : any) => {
      this.user=result;
      // console.log(this.user);
    })
  }

  sort(){
    this.service.sortService(this.searchValue,this.sortOrder).subscribe((result : any) =>{
      this.userList=result.items;
    })
    this.sortOrder=!this.sortOrder;
  }

  onScroll(){
    console.log("scroll")
    if(this.notScroll && this.notEmpty) {
      this.spinner.show();
      this.notScroll = false;
      this.loadNext();
    }
  }

  loadNext()
  {
    this.service.onSubmitService(this.searchValue,this.page).subscribe((result : any) => {
      console.log(result);
      console.log(this.userList);
      Array.prototype.push.apply(this.userList,result.items);
      console.log(this.userList);
      this.page++;
      this.spinner.hide();
      this.notScroll=true;
    })
  }

}
