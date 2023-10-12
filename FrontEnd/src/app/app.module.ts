import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SesamienModule } from './sesamien/sesamien.module';
import { FormsModule } from '@angular/forms';
import { SesamienService } from './sesamien/sesamien.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SesamienModule,
    AppRoutingModule
  ],
  providers: [SesamienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
