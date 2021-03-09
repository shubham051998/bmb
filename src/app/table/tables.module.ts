import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { TablesRoutes } from './tables.routing';
import { DatatableComponent } from './data-table/data-table.component';
import { BasicComponent } from './basic/basic.component';
import { ViewunitComponent } from './viewunit/viewunit.component';
import { FlatComponent } from './flat/flat.component';
import { ViewflatComponent } from './viewflat/viewflat.component';
import { Viewunit2Component } from './viewunit2/viewunit2.component';
import {PlotComponent} from './plot/plot.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TablesRoutes),
        NgxDatatableModule,
        FormsModule,
    ],
    declarations: [DatatableComponent, BasicComponent, ViewunitComponent, FlatComponent, ViewflatComponent, Viewunit2Component,PlotComponent ]
})
export class TablesModule { }
