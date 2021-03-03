import { Routes } from '@angular/router';

import { DatatableComponent } from './data-table/data-table.component';
import { BasicComponent } from './basic/basic.component';
import { Unitaval2Component } from './unitaval2/unitaval2.component';
import { FlatComponent } from './flat/flat.component';
export const TablesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'unitaval2',
                component: Unitaval2Component,
                data: {
                    title: 'Add unit',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Add unit' }
                    ]
                }
            },
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
