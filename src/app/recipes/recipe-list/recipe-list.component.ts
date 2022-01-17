import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe(
			'Biscuits',
			'Perfect Homemade Biscuits',
			'https://www.momontimeout.com/wp-content/uploads/2012/05/biscuit-recipe-easy-1.jpg'
		),
		new Recipe(
			'Biscuits',
			'Perfect Homemade Biscuits',
			'https://www.momontimeout.com/wp-content/uploads/2012/05/biscuit-recipe-easy-1.jpg'
		)
	];

	constructor() {}

	ngOnInit(): void {}
}
