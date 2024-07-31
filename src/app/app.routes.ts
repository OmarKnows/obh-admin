import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ROUTES } from './constants/routes';
import { EmployeeListComponent } from './modules/employees/employee-list/employee-list/employee-list.component';
import { UserListComponent } from './modules/users/user-list/user-list/user-list.component';
import { RoleListComponent } from './modules/roles/role-list/role-list/role-list.component';
import { ServiceListComponent } from './modules/services/service-list/service-list/service-list.component';
import { RegionListComponent } from './modules/regions/region-list/region-list/region-list.component';
import { CourtListComponent } from './modules/courts/court-list/court-list/court-list.component';
import { CaseTypeListComponent } from './modules/case-types/case-type-list/case-type-list/case-type-list.component';
import { BranchListComponent } from './modules/branches/branch-list/branch-list/branch-list.component';
import { EmployeeDetailsComponent } from './modules/employees/employee-details/employee-details/employee-details.component';
import { UserDetailsComponent } from './modules/users/user-details/user-details/user-details.component';
import { RoleDetailsComponent } from './modules/roles/role-details/role-details/role-details.component';
import { ServiceDetailsComponent } from './modules/services/service-details/service-details/service-details.component';
import { RegionDetailsComponent } from './modules/regions/region-details/region-details/region-details.component';
import { BranchDetailsComponent } from './modules/branches/branch-details/branch-details/branch-details.component';
import { CourtDetailsComponent } from './modules/courts/court-details/court-details/court-details.component';
import { CaseTypeDetailsComponent } from './modules/case-types/case-type-details/case-type-details/case-type-details.component';

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
      {
        path: ROUTES.EMPLOYEES,
        component: EmployeeListComponent,
      },
      {
        path: `${ROUTES.EMPLOYEES}/:id`,
        component: EmployeeDetailsComponent,
      },
      {
        path: ROUTES.USERS,
        component: UserListComponent,
      },
      {
        path: `${ROUTES.USERS}/:id`,
        component: UserDetailsComponent,
      },
      {
        path: ROUTES.ROLES,
        component: RoleListComponent,
      },
      {
        path: `${ROUTES.ROLES}/:id`,
        component: RoleDetailsComponent,
      },
      {
        path: ROUTES.SERVICES,
        component: ServiceListComponent,
      },
      {
        path: `${ROUTES.SERVICES}/:id`,
        component: ServiceDetailsComponent,
      },
      {
        path: ROUTES.REGIONS,
        component: RegionListComponent,
      },
      {
        path: `${ROUTES.REGIONS}/:id`,
        component: RegionDetailsComponent,
      },
      {
        path: ROUTES.BRANCHES,
        component: BranchListComponent,
      },
      {
        path: `${ROUTES.BRANCHES}/:id`,
        component: BranchDetailsComponent,
      },
      {
        path: ROUTES.COURTS,
        component: CourtListComponent,
      },
      {
        path: `${ROUTES.COURTS}/:id`,
        component: CourtDetailsComponent,
      },
      {
        path: ROUTES.CASE_TYPES,
        component: CaseTypeListComponent,
      },
      {
        path: `${ROUTES.CASE_TYPES}/:id`,
        component: CaseTypeDetailsComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
