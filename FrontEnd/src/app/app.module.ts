import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SesamienModule } from './sesamien/sesamien.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SesamienService } from './sesamien/sesamien.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './user/login/login.component';
import { HomepageModule } from './homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomepageModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    SesamienModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [SesamienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
