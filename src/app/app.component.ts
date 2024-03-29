import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  price = 100;
  discount = 5;

  priceChecker(): string{
    const finalPrice = this.price - (this.price * this.discount/100);
    return finalPrice > 100 ? 'lightblue' : 'lightgray';
  }
}
