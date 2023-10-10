import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { SesamienTypeColorPipe } from './sesamien-mention-color.pipe';
import { ListSesamienComponent } from './list-sesamien/list-sesamien.component';
import { DetailSesamienComponent } from './detail-sesamien/detail-sesamien.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    SesamienTypeColorPipe,
    ListSesamienComponent,
    DetailSesamienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
