import { Component, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './editor.component.html'
})
export class EditorComponent  {

    
  }



export class ToastrComponent {
  submitted: boolean;
  alertservice: any;
  constructor(private toastr: ToastrService, ) {}

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }
  

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }


}
