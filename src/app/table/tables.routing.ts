import { Routes } from '@angular/router';

import { DatatableComponent } from './data-table/data-table.component';
import { BasicComponent } from './basic/basic.component';
import {ViewunitComponent} from './viewunit/viewunit.component'
import { FlatComponent } from './flat/flat.component';
import { Viewunit2Component } from './viewunit2/viewunit2.component'
export const TablesRoutes: Routes = [
    {
        path: '',
        children: [
          
            {
                path: 'flat',
                component: FlatComponent,
                data: {
                    title: 'Flat',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Flat' }
                    ]
                }
            },
            {
                path: 'viewunit2',
                component: Viewunit2Component,
                data: {
                    title: 'View Flat',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Flat' }
                    ]
                }
            },
            {
                path: 'viewunit',
                component: ViewunitComponent,
                data: {
                    title: 'Add Floor And Flats',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Add' }
                    ]
                }
            },
            {
                path: 'datatable',
                component: DatatableComponent,
                data: {
                    title: 'Data Table',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Data Table' }
                    ]
                }
            },
            {
                path: 'basictable',
                component: BasicComponent,
                data: {
                    title: 'Basic Table',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Basic Table' }
                    ]
                }
            }
        ]
    }
];
