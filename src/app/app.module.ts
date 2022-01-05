import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main-page/header/header.component';
import { MainPageComponent } from './components/main-page/main-page/main-page.component';
import { RecipesListComponent } from './components/shared/recipes-list/recipes-list.component';
import { ReceipeDetailsComponent } from './components/shared/receipe-details/receipe-details.component';
import { ReceipeAddComponent } from './components/shared/receipe-add/receipe-add.component';
import { AuthorInfoComponent } from './components/shared/dialogs/author-info/author-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

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
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
