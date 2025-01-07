import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
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


  ngOnInit(): void {
    
  }
}
