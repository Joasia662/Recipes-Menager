import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRecipe } from 'src/app/interfaces/IRecipes';
import { ApiRequestsService } from 'src/app/services/api-requests.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recepies: IRecipe[] = [];
  isLoading = true;
  constructor(
    private api: ApiRequestsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRecipes();
  }


  getRecipes() {
    this.api.getRecipes().subscribe({
      next: res => {
        this.recepies = res;
        this.isLoading = false;
      },
      error: ({ err }) => {
      }
    });
  }

  onAddNewClick() {
    this.router.navigate(['./recipe/add']);
  }

  onDetailsClick(_id: string) {
    this.router.navigate([`./recipe/details/${_id}`]);
  }

  onEditClick(_id: string) {
    this.router.navigate([`./recipe/details/${_id}`]);
  }

  onDeleteClick(_id: string) {
    this.api.deleteRecipe(_id).subscribe({
      next: res => {},
      error: ({ err }) => {}
    });

    this.getRecipes();
  }
}
