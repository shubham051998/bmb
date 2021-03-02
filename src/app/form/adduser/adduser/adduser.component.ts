import { Component, NgModule, OnInit } from '@angular/core';
import { AddService } from '../../../apps/services/service2/add.service';
import {ToastrComponent} from '../../../extra-component/toastr/toastr.component';




@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {
 
  
    staff = {
      name: '',
      phone: '',
      email:'',
      user_type:'',
      profile_picture:'',
      password:'',
      remarks:'',
      status: '',
      documents_url:'',
    };
    submitted = false;
  fileToUpload: File;
  private _dishAddService: any;
  
    constructor(private addservice: AddService) { }
  
    ngOnInit(): void {
    }
  
    createProduct(): void {
      const data = {
        name: this.staff.name,
        phone: this.staff.phone,
        email: this.staff.email,
        user_type: this.staff.user_type,
        password: this.staff.password,
        remarks: this.staff.remarks,
        profile_picture: this.staff.profile_picture,
        status:this.staff.status,
        document:this.staff.documents_url,
      };
  
      this.addservice.create(data)
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
      this.staff = {
        name: '',
        phone: '',
        email:'',
        user_type:'',
        profile_picture:'',
        password:'',
        remarks:'',
        status:'',
        documents_url:'',
      };
    }
    handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
    }
  
    uploadFileToActivity() {
  
      this._dishAddService.postFile(this.fileToUpload).subscribe(() => {
  
        }, error => {
          console.log(error);
        });
    }
  
  }