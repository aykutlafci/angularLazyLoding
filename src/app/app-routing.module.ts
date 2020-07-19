
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{ path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', loadChildren: './components/home/home.module#HomeModule', pathMatch: 'full' },
  //{ path: 'about', component: AboutComponent },
  { path: 'about', loadChildren: './components/about/about.module#AboutModule' },
  { path: 'account', loadChildren: './components/account/account.module#AccountModule' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
