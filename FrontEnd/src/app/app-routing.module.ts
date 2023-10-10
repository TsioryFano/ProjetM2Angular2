import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSesamienComponent } from './list-sesamien/list-sesamien.component';
import { DetailSesamienComponent } from './detail-sesamien/detail-sesamien.component';

const routes: Routes = [
  {path: 'sesamiens', component: ListSesamienComponent},
  {path: 'sesamien/:id', component: DetailSesamienComponent},
  {path: '', redirectTo: 'sesamiens', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
