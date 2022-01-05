import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRecipe } from '../interfaces/IRecipes';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  enviroment = environment;
  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get<IRecipe[]>(`${this.enviroment.api_url}${this.enviroment.api_id}/recipes`);
  }

  getRecipesById(id: string) {
    return this.http.get<IRecipe[]>(`${this.enviroment.api_url}${this.enviroment.api_id}/recipes/${id}`);
  }

  addRecipe(body: any) {
    
    return this.http.post<IRecipe>(`${this.enviroment.api_url}${this.enviroment.api_id}/recipes`,  body );
  }
}
