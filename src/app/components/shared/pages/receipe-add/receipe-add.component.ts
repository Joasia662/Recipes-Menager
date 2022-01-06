import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from 'src/app/services/api-requests.service';

@Component({
  selector: 'app-receipe-add',
  templateUrl: './receipe-add.component.html',
  styleUrls: ['./receipe-add.component.scss']
})
export class ReceipeAddComponent implements OnInit {

  constructor(private api: ApiRequestsService) { }

  ngOnInit(): void {
    /*
    this.addRecipe();
    this.addRecipe();
    this.addRecipe();
    this.addRecipe();
    this.addRecipe();
    this.addRecipe();
    this.addRecipe();
    this.addRecipe();
    */
  }

  addRecipe(){
    let body = {
      name: 'Spaghetti Bolognese',
      preparationTimeInMinutes: 25,
      description: '1.Cebulę i czosnek obrać i poszatkować.<br>2.Marchewkę umyć, obrać i pokroić w drobną kostkę.<br>3.Cebulę i czosnek chwilkę podsmażyć na oleju. Dodać mięso mielone i marchewkę. Wszystko razem chwilę podsmażyć, aż mięso straci kolor różowy. Dodać pomidory z puszki (razem z sosem z puszki), przecier pomidorowy i bulion. Całość dusić pod przykryciem na niskiej mocy palnika ok. 20 minut. Przyprawić solą, pieprzem i oregano.<br>4.Spaghetti ugotować w osolonej wodzie według przepisu na opakowaniu. Odcedzić na durszlaku. (Nie przelewać zimną wodą)<br>5.Spaghetti rozłożyć na talerzach. Polać sosem z mięsem i posypać parmezanem',
      ingredients: [
        { name: 'mięsa mielonego', quantity: '300 g' },
        { name: 'cebuka', quantity: '1' },
        { name: 'ząbki czosnku', quantity: '2' },
        { name: 'puszka krojonych pomidorów', quantity: '1' },
        { name: 'bulion warzywny', quantity: '100ml' },
        { name: 'makaron Spaghetti', quantity: '300g' },
      ],
      meal_type: 'dinner'
    }
    this.api.addRecipe(body).subscribe({
      next: res => {
      },
      error: ({ err }) => {
      }
    });

  }
}
