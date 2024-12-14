import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: false,

  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  //to be quick no model for this demo
  orders: any;
  customerId!: number;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.customerId = this.route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    // here just a quick sample so we dont use services...
    this.http.get("http://localhost:9999/order-service/orders/search/byCustomerId?projection=fullOrder&customerId=" + this.customerId)
      .subscribe({
        next: data => {
          this.orders = data;
        },
        error: err => {
        }
      });
  }

  getOrderDetails(o: any) {
    this.router.navigateByUrl("/order-details/" + o.id);
  }
}
