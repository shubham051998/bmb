import { Routes } from '@angular/router';

import { BasicComponent } from './form-basic/basic.component';
import { FormvalComponent } from './form-validation/form-validation.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { ViewuserComponent2} from './viewuser/viewuser2/viewuser2.component';

export const FormsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'formbasic',
                component: BasicComponent,
                data: {
                    title: 'Add User',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Add User' }
                    ]
                }
            },
            {
                path: 'viewuser2',
                component: ViewuserComponent2,
                data: {
                    title: 'View User',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'View User' }
                    ]
                }
            },
            {
                path: 'formvalidation',
                component: FormvalComponent,
                data: {
                    title: 'View User',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'View User' }
                    ]
                }
            },
            {
                path: 'multiselect',
                component: MultiselectComponent,
                data: {
                    title: 'Multiselect',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Multiselect' }
                    ]
                }
            },
            {
                path: 'ngx',
                loadChildren: () => import('./ngx-wizard/ngx-wizard.module').then(m => m.NGXFormWizardModule)
            }
        ]
    }
];
