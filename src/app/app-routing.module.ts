import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeAddComponent } from './components/shared/pages/receipe-add/receipe-add.component';
import { ReceipeDetailsComponent } from './components/shared/pages/receipe-details/receipe-details.component';

const routes: Routes = [
  {
    path: 'recipe', children: [
      { path: 'add', component: ReceipeAddComponent },
      { path: 'details/:id', component: ReceipeDetailsComponent },
      //{ path: '**', redirectTo: 'add', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'receipe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
