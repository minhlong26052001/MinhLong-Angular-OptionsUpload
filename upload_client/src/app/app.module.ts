import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UploadComponent } from './upload/upload.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    // UploadComponent,
    // PageNotFoundComponent,
    // DetailsComponent
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
