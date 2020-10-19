import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SopaFeitaComponent } from './sopa-feita/sopa-feita.component';
import { StartPageComponent } from './start-page/start-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicial', pathMatch: 'full'},
  {path: 'inicial', component: StartPageComponent},
  {path: 'sopa', component: SopaFeitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
