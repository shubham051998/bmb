import { Routes } from '@angular/router';
import { from } from 'rxjs';


import {AddbannerComponent} from './addbanner/addbanner.component'
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
     
      {
        path: 'fullcalendar',
        component: FullcalendarComponent,
        data: {
          title: 'Full-Calendar',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Full-Calendar' }
          ]
        }
      },
      {
        path: 'Addbanner',
        component: AddbannerComponent,
        data: {
          title: 'Add Banner',
          urls: [
            { title: 'Dashboard', url: '/dashboard/dasboard1' },
            { title: 'Add banner'}
          ]
        }
      }
    ]
  }
];
