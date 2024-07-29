import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { UsersComponent } from './modules/users/users.component';
import { EmployeesComponent } from './modules/employees/employees.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { CaseTypesComponent } from './modules/case-types/case-types.component';
import { CourtsComponent } from './modules/courts/courts.component';
import { BranchesComponent } from './modules/branches/branches.component';
import { RegionsComponent } from './modules/regions/regions.component';
import { ServicesComponent } from './modules/services/services.component';
import { RolesComponent } from './modules/roles/roles.component';

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
      { path: 'users', component: UsersComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'regions', component: RegionsComponent },
      { path: 'branches', component: BranchesComponent },
      { path: 'courts', component: CourtsComponent },
      { path: 'case-types', component: CaseTypesComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
