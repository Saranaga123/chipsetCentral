import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent {
  @ViewChild('printableContent', { static: false }) printableContent!: ElementRef;
amount:any=""
name:any=""
model:any=""
id:any=""
poco:any=""
add1:any=""
add2:any=""
add3:any=""
date:any;
units:any;
unitprice:any;
constructor(
  private router: Router,
  private renderer: Renderer2
) {
}
orderdata:any
  ngOnInit(): void {

    let order = sessionStorage.getItem("orderDetails")
    if(order){

      this.orderdata= JSON.parse(order)

      this.amount=this.orderdata.billingAmount
      this.name=this.orderdata.name
      this.units=this.orderdata.units
      this.model=this.orderdata.model
      this.id=this.orderdata.id
      this.add1=this.orderdata.add1;
      this.add2=this.orderdata.add2
      this.add3=this.orderdata.add3
      this.poco=this.orderdata.post
      this.date=this.orderdata.date
      this.unitprice=this.orderdata.unitprice
    }

  }
  print() {
    console.log("print reciepts")
    let printContents = this.printableContent.nativeElement.innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }

  home(){
    this.router.navigate(['/']);
  }
}
