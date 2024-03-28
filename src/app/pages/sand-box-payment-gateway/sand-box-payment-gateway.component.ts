import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingService } from 'src/app/services/landing.service';

@Component({
  selector: 'app-sand-box-payment-gateway',
  templateUrl: './sand-box-payment-gateway.component.html',
  styleUrls: ['./sand-box-payment-gateway.component.scss']
})
export class SandBoxPaymentGatewayComponent {
amount:any=""
name:any=""
id:any=""
orderdata:any
constructor(
  private router: Router,
  private landingservice : LandingService,
  private spinner: NgxSpinnerService,
  private route: ActivatedRoute,
  private modal: NgbModal,
) {
}
ngOnInit(): void {

  let order = sessionStorage.getItem("orderDetails")
  if(order){
    this.orderdata= JSON.parse(order)
    this.amount=this.orderdata.billingAmount
    this.name=this.orderdata.name
    this.id=this.orderdata.id
  }
}
submit(){
  this.spinner.show();
  this.orderdata.status = "inprogress"
  let orderDetails = this.orderdata
  this.landingservice.updateOrder(this.id,orderDetails).subscribe(
    (response) => {
      this.spinner.hide();
      console.log("responce good ", response);
      this.router.navigate(['/thankyou']);
    },
    (error) => {
      this.spinner.hide();
      console.log("responce bad", error.error.text);
    }
  );
}

}
