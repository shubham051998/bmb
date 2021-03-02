import { Routes } from '@angular/router';

import { ToastrComponent } from './toastr/toastr.component';
import { UploadComponent } from './file-upload/upload.component';
import { EditorComponent } from './editor/editor.component';
import { DragComponent } from './drag-n-drop/drag.component';
import{AddalertComponent} from './addalert/addalert.component';
import { ViewalertComponent } from './viewalert/viewalert/viewalert.component';
export const ExtraComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addalert',
        component: AddalertComponent,
        data: {
          title: 'Add Alert',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Alert' }
          ]
        }
      },
      {
        path: 'toastr',
        component: ToastrComponent,
        data: {
          title: 'Toastr Notification',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Toastr Page' }
          ]
        }
      },
      {

        path: 'viewalert',
        component: ViewalertComponent,
        data: {
          title: 'Viewalert',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'View alert' }
          ]
        }
      },
      {

        path: 'upload',
        component: UploadComponent,
        data: {
          title: 'Upload Page',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Upload Page' }
          ]
        }
      },
      {
        path: 'editor',
        component: EditorComponent,
        data: {
          title: 'Editor Page',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Editor Page' }
          ]
        }
      },
      {
        path: 'dragndrop',
        component: DragComponent,
        data: {
          title: 'DragComponent Page',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'DragComponent Page' }
          ]
        }
      }
    ]
  }
];
