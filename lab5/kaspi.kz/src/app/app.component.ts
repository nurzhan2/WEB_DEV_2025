import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Component } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
<div class="header">
  <div class="logo-wrapper">
  <img src="https://kaspi.kz/img/main_logo.svg" class="main-logo"/>
  </div>

  <h2 class="title">Категории</h2>

  <div class="category-bar">
    <button
      *ngFor="let c of productService.categories"
      (click)="selectCategory(c.id)"
      [class.active]="selectedCategoryId === c.id"
    >
      {{c.name}}
    </button>
  </div>

</div>

<product-list
  *ngIf="selectedCategoryId !== 0"
  [products]="productService.getProductsByCategory(selectedCategoryId)">
</product-list>
`,
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ProductListComponent]
})
export class AppComponent {

  selectedCategoryId = 0;

  constructor(public productService: ProductService) {}

  selectCategory(id: number){
    this.selectedCategoryId = id;
  }

}
