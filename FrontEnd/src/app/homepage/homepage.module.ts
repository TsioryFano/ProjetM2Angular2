import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SesamienModule } from '../sesamien/sesamien.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ HomepageComponent],
  imports: [
    CommonModule,
    SesamienModule,
    MatToolbarModule,
  ]
})
export class HomepageModule { }
