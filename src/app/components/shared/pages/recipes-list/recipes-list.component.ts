import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/interfaces/IRecipes';
import { ApiRequestsService } from 'src/app/services/api-requests.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recepies: IRecipe[]=[];
  isLoading=true;
  constructor(private api: ApiRequestsService) { }

  ngOnInit(): void {
  }


  getRecipes(){
    this.api.getRecipes().subscribe({
      next: res => {
        this.recepies=res;
        this.isLoading=false;
      },
      error: ({ err }) => {
      }
    });
  }
}
