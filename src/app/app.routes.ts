import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserTableComponent } from './user-table/user-table.component';
import { EditUserComponent } from './edit-user/edit-user.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'user-table', component: UserTableComponent },
  { path: 'edit/:id', component: EditUserComponent }
];
export const AppRoutingModule = RouterModule.forRoot(routes);
