import { Component, OnInit } from '@angular/core';
import { Building } from '../../apps/models/user.model';
import {  UnitService } from './../../apps/services/unit.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {
  
 
  
  unit = {
    project_by: '',
    project_name: '',
    rera_reg_no:'',
    property_type:'',
    project_address:'',
    auth_person_name:'',
    contact_no:'',
    email: '',
    promoter_name:'',
    project_start_date:'',
    project_completion_date:'',
    brochure:'',
    link:'',
    property_config: '',
    property:'',
  };
  submitted = false;
brochure: any;
  modalService: any;
  closeResult: string;
  getDismissReason: any;



  constructor(private unitservice: UnitService ,  modalService: NgbModal) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      project_by: this.unit.project_by,
      project_name: this.unit.project_name,
      rera_reg_no: this.unit.rera_reg_no,
      property_type: this.unit.property_type,
      project_address: this.unit.project_address,
      auth_person_name: this.unit.auth_person_name,
      contact_no: this.unit.contact_no,
      email:this.unit.email,
      promoter_name:this.unit.promoter_name,
    
      project_start_date: this.unit.project_start_date,
      project_completion_date: this.unit. project_completion_date,
      brochure: this.brochure,
      link:this.unit. link,
      property_config:this.unit.property_config,
      property:this.unit. property,
    };

    this.unitservice.create(data)
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
    this.unit = {
      project_by: '',
      project_name: '',
      rera_reg_no:'',
      property_type:'',
      project_address:'',
      auth_person_name:'',
      contact_no:'',
      email: '',
      promoter_name:'',
      project_start_date:'',
      project_completion_date:'',
      brochure:'',
      link:'',
      property_config: '',
      property:'',
    };
  }
  open2(content2) {
		this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
  openVerticallyCentered(content2) {
		this.modalService.open(content2, { centered: true });
	}
}
