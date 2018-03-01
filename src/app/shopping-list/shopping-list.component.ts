import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('apples', 2),
  new Ingredient('oranges', 12), new Ingredient('peanut', 20)];
  constructor() { }

  ngOnInit() {
  }

}
