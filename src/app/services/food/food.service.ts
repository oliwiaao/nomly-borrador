import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
// import { ElementSchemaRegistry } from '@angular/compiler';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food=> food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string): Food[]{
    return this.getAll().filter(food=>
      food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  getAllTags():Tag[]{
    return [
      {name: 'All', count: 4},
      {name: 'Healthy', count: 4},
      {name: 'Vegan', count: 3},
      {name: 'Lunch', count: 3},
      {name: 'Breakfast', count: 1}
    ]
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag=="All"? this.getAll() :
    this.getAll().filter(food=> food.tags?.includes(tag));
  }
  getAll():Food[] {
    return [
      {
        id: 1,
        name: 'Quinoa Salad',
        cookTime: '10-20',
        price: 15,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '../../../assets/food-1.jpg',
        tags: ['Healthy', 'Vegan', 'Lunch']
      },
      {
        id: 2,
        name: 'Poke Bowl',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Japan'],
        stars: 5,
        imageUrl: '../../../assets/food-2.jpg',
        tags: ['Healthy', 'Lunch']
      },
      {
        id: 3,
        name: 'Breakfast Bowl',
        cookTime: '10',
        price: 15,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '../../../assets/food-3.jpg',
        tags: ['Healthy', 'Vegan', 'Breakfast']
      },
      {
        id: 4,
        name: 'Fruit Bowl',
        cookTime: '15',
        price: 10,
        favorite: false,
        origins: ['China'],
        stars: 5,
        imageUrl: '../../../assets/food-4.jpg',
        tags: ['Healthy', 'Vegan', 'Lunch']
      }
    ];
  }
  
  
  
}

