import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main-page/header/header.component';
import { MainPageComponent } from './components/main-page/main-page/main-page.component';
import { RecipesListComponent } from './components/shared/pages/recipes-list/recipes-list.component';
import { ReceipeDetailsComponent } from './components/shared/pages/receipe-details/receipe-details.component';
import { ReceipeAddComponent } from './components/shared/pages/receipe-add/receipe-add.component';
import { AuthorInfoComponent } from './components/shared/dialogs/author-info/author-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    RecipesListComponent,
    ReceipeDetailsComponent,
    ReceipeAddComponent,
    AuthorInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
