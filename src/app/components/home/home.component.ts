import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
// import { TagsComponent } from "../tags/tags.component";
import { RouterModule } from '@angular/router';
import { DishComponent } from '../dish/dish.component';


// falta import tagcomponent
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, RouterModule, DishComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  allFoods: Food[] = [];

  constructor(private foodService:FoodService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.allFoods = this.foodService.getAll();
    this.foods = this.allFoods;
    console.log('All Foods:', this.allFoods);

    this.route.params.subscribe(params => {
      const searchTerm = params['searchTerm']?.toLowerCase();
      const tag= params['tag'];
      console.log('Search Term:', searchTerm);

      if (searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(searchTerm);
        console.log('Filtered Foods:', this.foods); // Esta línea no debería estar dentro del paréntesis
      } else if (tag) {
        this.foods = this.foodService.getAllFoodsByTag(tag);
      } else {
        this.foods = this.allFoods;
      }
    });
  }
}
