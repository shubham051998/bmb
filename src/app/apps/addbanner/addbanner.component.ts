import { Component, OnInit } from '@angular/core';
import{BannerService} from './../services/banner.service'
@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.css']
})
export class AddbannerComponent implements OnInit {

  banner = {
    title: '',
   Image: '',
    hyper_link:'',
    
  };
  submitted = false;
fileToUpload: File;
private _dishAddService: any;
Staff={}
  constructor(private bannerservice: BannerService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      title: this.banner.title,
     Image: this.banner.Image,
     hyper_link: this.banner.hyper_link,
     
    };

    this.bannerservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.banner = {
      title: '',
      Image: '',
       hyper_link:'',
    };
  }
 

}
