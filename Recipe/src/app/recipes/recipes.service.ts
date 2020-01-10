import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            imageUrl: 'https://platedcravings.com/wp-content/uploads/2019/08/Schnitzel-Plated-Cravings-13-500x500.jpg',
            ingredients: ['French Fries', 'Pork Meat', 'Salad']
        },
        {
            id: 'r2',
            title: 'Spaghetti',
            imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
            ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
        }
    ]

  constructor() { }

  getAllRecipes(){

      return [...this.recipes];

  }

  getRecipe(recipeId: string){

    return {
        ...this.recipes.find(recipe => {
            
          return recipe.id === recipeId;
      
        })
    };

  }

  deleteRecipe(recipeId: string){
      
    this.recipes = this.recipes.filter(recipe =>{

        return recipe.id !== recipeId;

    });
  }

}
