import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppViewComponent } from './pages/app-view/app-view.component';
import { SignOnComponent } from './pages/sign-on/sign-on.component';


const routes: Routes = [
  { path: 'home', component: SignOnComponent },
  { path: 'application-view', component: AppViewComponent },
  { path: '**', component: SignOnComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
