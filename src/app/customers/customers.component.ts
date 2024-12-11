import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: false,

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  //to be quick no model for this demo
  customers: any;
  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    // here just a quick sample so we dont use services...
    this.http.get("http://localhost:9999/customer-service/customers?projection=fullCustomer")
      .subscribe({
        next: data => {
          this.customers = data;
        },
        error: err => {}
      });
  }
}
