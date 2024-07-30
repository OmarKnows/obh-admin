import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { UsersComponent } from './modules/users/users.component';
import { EmployeesComponent } from './modules/employees/employees.component';
import { CaseTypesComponent } from './modules/case-types/case-types.component';
import { CourtsComponent } from './modules/courts/courts.component';
import { BranchesComponent } from './modules/branches/branches.component';
import { RegionsComponent } from './modules/regions/regions.component';
import { ServicesComponent } from './modules/services/services.component';
import { RolesComponent } from './modules/roles/roles.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ROUTES } from './constants/routes';

export const routes: Routes = [
  {
    path: ROUTES.AUTH,
    component: AuthLayoutComponent,
    children: [
      { path: ROUTES.LOGIN, component: LoginComponent },
      { path: '', redirectTo: ROUTES.LOGIN, pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      { path: ROUTES.EMPLOYEES, component: EmployeesComponent },
      { path: ROUTES.USERS, component: UsersComponent },
      { path: ROUTES.ROLES, component: RolesComponent },
      { path: ROUTES.SERVICES, component: ServicesComponent },
      { path: ROUTES.REGIONS, component: RegionsComponent },
      { path: ROUTES.BRANCHES, component: BranchesComponent },
      { path: ROUTES.COURTS, component: CourtsComponent },
      { path: ROUTES.CASE_TYPES, component: CaseTypesComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
