import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { ExtraComponentsRoutes } from './extra-component.routing';
import { ToastrComponent } from './toastr/toastr.component';
import { UploadComponent } from './file-upload/upload.component';
import { EditorComponent } from './editor/editor.component';
import { DragComponent } from './drag-n-drop/drag.component';

import { ViewalertComponent } from './viewalert/viewalert/viewalert.component';
import { AddalertComponent } from './addalert/addalert.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExtraComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    NgbModule,
    FileUploadModule,
    DragDropModule
  ],

  declarations: [
    ToastrComponent,
    EditorComponent,

    DragComponent,
    ViewalertComponent,

    DragComponent,

    AddalertComponent

  ]
})
export class ExtraComponentModule {}
