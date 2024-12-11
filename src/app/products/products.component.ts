import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  //to be quick no model for this demo
  products: any;
  constructor(private http:HttpClient) {}
    ngOnInit(): void {
      // here just a quick sample so we dont use services...
      this.http.get("http://localhost:9999/inventory-service/products?projection=fullProduct")
        .subscribe({
        next: data => {
          this.products = data;
        },
        error: err => {}
      });
    }
}
