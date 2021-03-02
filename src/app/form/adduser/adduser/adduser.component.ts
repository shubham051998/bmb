import { Component, OnInit } from '@angular/core';
import { AddService } from '../../../apps/services/service2/add.service';
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
      };
    }
    handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
    }
  
    uploadFileToActivity() {
  
      this._dishAddService.postFile(this.fileToUpload).subscribe(data => {
  
        }, error => {
          console.log(error);
        });
    }
  
  }