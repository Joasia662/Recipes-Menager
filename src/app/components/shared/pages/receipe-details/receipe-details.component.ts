import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from 'src/app/interfaces/IRecipes';
import { ApiRequestsService } from 'src/app/services/api-requests.service';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.scss']
})
export class ReceipeDetailsComponent implements OnInit {

  recipe: IRecipe = ({} as any);
  recipeId: any = {};
  isLoading = true;
  constructor(
    private api: ApiRequestsService,
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.recipeId = params['id'];
      this.getRecipe(this.recipeId);
      }
    );

  }

  getRecipe(_id: string) {
    this.api.getRecipesById(_id).subscribe({
      next: res => {
        this.recipe = res;
        this.isLoading = false;
      },
      error: ({ err }) => { }
    });
  }

}
