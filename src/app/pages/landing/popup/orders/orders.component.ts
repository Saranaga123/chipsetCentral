
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingService } from 'src/app/services/landing.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input() data: any;
  orders:any={}
  constructor(
    private router: Router,
    private landingservice : LandingService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private modal: NgbModal,
  ) {
  }
  ngOnInit(): void {
    console.log("data",this.data)
    setTimeout(() => {
      this.getOrders(this.data);
      console.log(this.data)
  }, 100);
  }
  getOrders (email: any): void {
    this.spinner.show();
      const observer = {
        next: (data: any) => {
          this.spinner.hide();
          this.orders = data
          console.log(data);


        },
        error: (error: any) => {
          this.spinner.hide();
          console.error('Error retrieving transaction:', error);
        },
      };
      console.log(this.orders.lenght)
      this.landingservice.getorders(email).subscribe(observer);
  }
}
