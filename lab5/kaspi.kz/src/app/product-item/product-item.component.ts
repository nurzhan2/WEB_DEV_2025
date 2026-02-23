import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfo } from '../product-info';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product!: ProductInfo;

  @Output() delete = new EventEmitter<number>();

  like(){
    this.product.likes++;
  }

  remove(){
    this.delete.emit(this.product.id);
  }

  shareWhatsApp() {
  const url = this.product.link;
  return `https://wa.me/?text=${encodeURIComponent(url)}`;
  }

  shareTelegram() {
    const url = this.product.link;
    return `https://t.me/share/url?url=${encodeURIComponent(url)}`;
  }


}