import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { ControllerInterfaceComponent } from '../../pages/controller-interface/controller-interface.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'controller-interface', component: ControllerInterfaceComponent },
  // { path: 'mocked-website', component: OriginalWebsiteComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
