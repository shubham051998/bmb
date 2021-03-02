import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../apps/services/main.service';
@Component({
  selector: 'app-viewalert',
  templateUrl: './viewalert.component.html',
  styleUrls: ['./viewalert.component.css']
})
export class ViewalertComponent implements OnInit {

  alerts: any;
  currentProduct = null;
  currentIndex = -1;
  name = '';
  currentalert: any;

  constructor(private mainservice: MainService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void {
    this.mainservice.readAll('alert')
      .subscribe(
        alerts => {
          this.alerts = alerts;
          console.log(alerts);
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
    this.currentalert = alert;
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
          this.alerts = alerts;
          console.log(alerts);
        },
        error => {
          console.log(error);
        });
  }
}
