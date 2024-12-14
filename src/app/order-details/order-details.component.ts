import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order-details',
  standalone: false,

  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {
  //to be quick no model for this demo
  orderDetails: any;
  orderId!: number;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.orderId = route.snapshot.params['orderId'];
  }

  // here just a quick sample so we dont use services...
  ngOnInit(): void { this.http.get("http://localhost:9999/order-service/fullOrder/" + this.orderId)
        .subscribe({
                     next: data => {
          this.orderDetails = data;
        },
        error: err => {
        }
        });
}

//getOrderDetails(o: any) {
//  this.router.navigateByUrl("/order-details/" + o.id);

//}

}
