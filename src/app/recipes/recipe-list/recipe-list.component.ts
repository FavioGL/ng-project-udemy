import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tacos','good tacos', '../../assets/img/recipe.jpg'),
    new Recipe('Flautas','good flautas', '../../assets/img/recipe2.jpg')
  ];
  constructor() {
    
   }

  ngOnInit() {
  }

}
