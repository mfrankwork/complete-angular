import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
// import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from './ingredient.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    // const recipes = this.recipeService.getRecipes();
    // this.http.put('https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json', recipes).subscribe((response) => {
    //   console.log(response);
    // });
    console.log('SKIPPING STORAGE');
  }

  fetchRecipes() {
    // return this.http.get<Recipe[]>('https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json').pipe(
    //   map((recipes) => {
    //     return recipes.map((recipe) => {
    //       return {
    //         ...recipe,
    //         ingredients: recipe.ingredients ? recipe.ingredients : []
    //       };
    //     });
    //   }),
    //   tap((recipes) => {
    //     this.recipeService.setRecipes(recipes);
    //   })
    // );
    console.log('SKIPPING FETCH. RETURNING CANNED DATE INSTEAD.');
    const recipes: Recipe[] = [
      new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
      ),
      new Recipe(
        'Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
      )
    ];
    this.recipeService.setRecipes(recipes);
    return of(recipes);
  }
}
