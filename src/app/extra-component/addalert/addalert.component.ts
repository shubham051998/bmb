import { Component, OnInit } from '@angular/core';
import { AlertService} from './../../apps/services/alert.service';
 @Component({
  selector: 'app-addalert',
  templateUrl: './addalert.component.html',
  styleUrls: ['./addalert.component.css']
})
export class AddalertComponent implements OnInit {

    staff = {
      
      title: '',
      image:'',
      description:'',
      hyper_link:'',
      posted_by:'',
     
    };
    submitted = false;
  fileToUpload: File;
  private _dishAddService: any;
   alert: any={};
  
    constructor(private alertService: AlertService) { }
  
    ngOnInit(): void {
    }
  
    createProduct(): void {
      const data = {
      
        title: this.alert.title,
        image: this.alert.image,
        description: this.alert.description,
        hyper_link: this.alert.hyper_link,
        posted_by: this.alert.posted_by
       
        
      };
  
      this.alertService.create(data)
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
      this.alert = {
       
      title: '',
      image:'',
      description:'',
      hyper_link:'',
      posted_by:'',
      };
    }
    

    
  
   
  }