import { Component, OnInit } from '@angular/core';
import{MainService} from './../services/main.service';
@Component({
  selector: 'app-viewbanner',
  templateUrl: './viewbanner.component.html',
  styleUrls: ['./viewbanner.component.css']
})
export class ViewbannerComponent implements OnInit {

  staffs: any;
  currentProduct = null;
  currentIndex = -1;
  name = '';
  main: any;
  readbanners: any;
  banners: any;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.readUsers();
  }

  readUsers(): void {
    this.mainService.readAll('banner')
      .subscribe(
        staffs => {
          this.staffs = staffs.viewstaffs;
          console.log(banners);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readbanners();
    this.currentProduct = null;
    this.currentIndex = -1;
  }
  

  setCurrentUser(product, index): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  deleteAllUsers(): void {
    this.mainService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readUsers();
        },
        error => {
          console.log(error);
        });
  }

  searchByName(): void {
    this.main.searchByName(this.name)
      .subscribe(
       banners => {
          this.banners = banners;
          console.log(banners);
        },
        error => {
          console.log(error);
        });
  }
}

function banners(banners: any) {
  throw new Error('Function not implemented.');
}
