import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MainService } from '../../apps/services/main.service';
@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
 
  
  currentIndex = -1;
  name = '';
  banners: any;
  currentbanner: any;
  currentProduct: any;

  constructor(private mainservice: MainService) { }
  

  
  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void {
    this.mainservice.readAll('banner')
      .subscribe(
        alerts => {
          this.banners = this.banners;
          console.log(this.banners);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readProducts();
    this.currentProduct = null;
    this.currentIndex = -1;
  }

  setCurrentalert(alert, index): void {
    this.currentbanner = this.banners;
    this.currentIndex = index;
  }

  deleteAllalerts(): void {
    this.mainservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readProducts();
        },
        error => {
          console.log(error);
        });
  }

  searchByName(): void {
    this.mainservice.searchByName(this.name)
      .subscribe(
        alerts => {
          this.banners= this.banners;
          console.log(this.banners);
        },
        error => {
          console.log(error);
        });
  }
}
