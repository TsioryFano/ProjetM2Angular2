import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSesamienComponent } from './list-sesamien/list-sesamien.component';
import { DetailSesamienComponent } from './detail-sesamien/detail-sesamien.component';
import { BorderCardDirective } from './border-card.directive';
import { SesamienMentionColorPipe } from './sesamien-mention-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SesamienFormComponent } from './sesamien-form/sesamien-form.component';
import { EditSesamienComponent } from './edit-sesamien/edit-sesamien.component';
import { AddSesamienComponent } from './add-sesamien/add-sesamien.component';
import { SearchSesamienComponent } from './search-sesamien/search-sesamien.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthenticationGuard } from '../guards/authentication.guard';

const sesamienRoutes: Routes = [
  {path: 'edit/sesamien/:id', component: EditSesamienComponent , canActivate : [AuthenticationGuard]},
  {path: 'sesamien/add', component: AddSesamienComponent, canActivate : [AuthenticationGuard]},
  {path: 'sesamiens', component: ListSesamienComponent, canActivate : [AuthenticationGuard]},
  {path: 'sesamien/:id', component: DetailSesamienComponent, canActivate : [AuthenticationGuard]},
]

@NgModule({
  declarations: [
    ListSesamienComponent,
    DetailSesamienComponent,
    BorderCardDirective,
    SesamienMentionColorPipe,
    SesamienFormComponent,
    EditSesamienComponent,
    AddSesamienComponent,
    SearchSesamienComponent
  ],
  exports: [
    ListSesamienComponent // Assurez-vous que ListSesamienComponent est exporté
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    RouterModule.forChild(sesamienRoutes)
  ]
})
export class SesamienModule { }
