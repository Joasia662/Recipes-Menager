import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page/main-page.component';
import { ReceipeAddComponent } from './components/shared/receipe-add/receipe-add.component';
import { ReceipeDetailsComponent } from './components/shared/receipe-details/receipe-details.component';

const routes: Routes = [
  {
    path: 'receipe', component: MainPageComponent, children: [
      { path: 'add', component: ReceipeAddComponent },
      { path: 'details/:id', component: ReceipeDetailsComponent },
      { path: '**', redirectTo: 'add', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'receipe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
