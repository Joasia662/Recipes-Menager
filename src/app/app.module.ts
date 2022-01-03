import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main-page/header/header.component';
import { FooterComponent } from './components/main-page/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page/main-page.component';
import { RecipesListComponent } from './components/shared/recipes-list/recipes-list.component';
import { ReceipeDetailsComponent } from './components/shared/receipe-details/receipe-details.component';
import { ReceipeAddComponent } from './components/shared/receipe-add/receipe-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    RecipesListComponent,
    ReceipeDetailsComponent,
    ReceipeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
