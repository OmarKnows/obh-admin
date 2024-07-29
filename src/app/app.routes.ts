import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { UsersComponent } from './modules/users/users.component';
import { EmployeesComponent } from './modules/employees/employees.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      { path: 'employees', component: EmployeesComponent },
      { path: 'users ', component: UsersComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
