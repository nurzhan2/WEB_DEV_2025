import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductInfo } from '../product-info';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


}
