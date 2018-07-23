import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

const APP_ROUTES: Routes = [
  { path: 'crear', component: UserFormComponent },
  { path: 'listar', component: UserListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'crear' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
