import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './user/login/login.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  
  {path:'login', component: LoginComponent},
  {path:'homepage', component: HomepageComponent,canActivate : [AuthenticationGuard]},
  {path:'', component: LoginComponent},
//  {path: '', redirectTo: 'sesamiens', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
