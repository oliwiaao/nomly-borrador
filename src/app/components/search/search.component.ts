import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  searchTerm: string = "";
  private searchSubject: Subject<string> = new Subject<string>();  // Para manejar el retraso en la búsqueda

  constructor(private route: ActivatedRoute, private router: Router) {
    this.searchSubject.pipe(debounceTime(500))  // Espera 500ms después de que el usuario termine de escribir
      .subscribe(term => this.search(term));
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'] || '';
      }
    })
  }

  onSearch(): void {
    this.router.navigate(['/search', this.searchTerm]);
  }

  search(term: string): void {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    }
  }

  onInputChange(): void {
    this.searchSubject.next(this.searchTerm);  // Emitir el cambio al subject
  }
}
