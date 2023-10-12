import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSesamienComponent } from './list-sesamien/list-sesamien.component';
import { DetailSesamienComponent } from './detail-sesamien/detail-sesamien.component';
import { BorderCardDirective } from './border-card.directive';
import { SesamienMentionColorPipe } from './sesamien-mention-color.pipe';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SesamienFormComponent } from './sesamien-form/sesamien-form.component';
import { EditSesamienComponent } from './edit-sesamien/edit-sesamien.component';

const sesamienRoutes: Routes = [
  {path: 'edit/sesamien/:id', component: EditSesamienComponent},
  {path: 'sesamiens', component: ListSesamienComponent},
  {path: 'sesamien/:id', component: DetailSesamienComponent},
]

@NgModule({
  declarations: [
    ListSesamienComponent,
    DetailSesamienComponent,
    BorderCardDirective,
    SesamienMentionColorPipe,
    SesamienFormComponent,
    EditSesamienComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(sesamienRoutes)
  ]
})
export class SesamienModule { }
