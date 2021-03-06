import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter, CalendarDateFormatter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppsRoutes } from './apps.routing';

import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { Image2Component } from './image2/image2.component';
import { AppModule } from '../app.module';
import { AddbannerComponent } from './addbanner/addbanner.component';
import { ViewbannerComponent } from './viewbanner/viewbanner.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModalModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        QuillModule,
        DragDropModule,
        RouterModule.forChild(AppsRoutes)
    ],
 
    declarations: [ FullcalendarComponent, ImageViewComponent, Image2Component, AddbannerComponent, ViewbannerComponent,]

 
})
export class AppsModule { }
