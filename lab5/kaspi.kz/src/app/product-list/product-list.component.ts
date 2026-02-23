import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfo } from '../product-info';
import { ProductService } from '../product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products!: ProductInfo[];
  constructor(public productService: ProductService){};
  @Output() delete = new EventEmitter<number>();
  remove(id: number){
    this.productService.products =
    this.productService.products.filter(p => p.id !== id);
  }


}