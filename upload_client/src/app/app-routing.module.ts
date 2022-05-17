import { UploadComponent } from './upload/upload.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: UploadComponent},
  {path: 'details/:id', component:DetailsComponent},
  {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [UploadComponent, DetailsComponent, PageNotFoundComponent]
