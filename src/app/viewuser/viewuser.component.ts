import { Component, OnInit } from '@angular/core';
import { MainService} from '../apps/services/main.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';



@Component({
  selector: 'app-product-list',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  staffs: any;
  currentProduct = null;
  currentIndex = -1;
  name = '';
  main: any;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.readUsers();
  }

  readUsers(): void {
    this.mainService.readAll('staff')
      .subscribe(
        staffs => {
          this.staffs = staffs.viewstaffs;
          console.log(staffs);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readUsers();
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
        staffs => {
          this.staffs = staffs;
          console.log(staffs);
        },
        error => {
          console.log(error);
        });
  }
}