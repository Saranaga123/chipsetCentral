import { Component } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingService } from 'src/app/services/landing.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {
  pcmodel: string="";
  specs:any={};
  price:any=0.00;
  discount:any=0.00;
  Total:any=0.00;
  amount: any = 1;
  name:any="";
  mobile:any="";
  email:any="";
  post:any="";
  add1:any="";
  add2:any="";
  add3:any="";
  payMethod:any=1;

  constructor(
    private titleService: Title,
    private router: Router,
    private landingservice : LandingService,
    private spinner: NgxSpinnerService,
    private _sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    // Subscribe to route parameters
    this.route.params.subscribe(params => {
      this.pcmodel = params['model'];
      // Now you can use this.pcmodel in your component
    });

    // Set the page title
    this.titleService.setTitle('Buy ' + this.pcmodel + ' | CChips');

    // Call the getProd method with the pcmodel parameter
    this.getProd(this.pcmodel);
  }

  getProd(model: any): void {
    // Show a spinner while data is being fetched
    this.spinner.show();
    const observer = {
      next: (data: any) => {
        this.specs = data[0];
        this.specs.image = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + this.specs.image);
        this.specs.image2 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + this.specs.image2);
        this.specs.image3 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + this.specs.image3);
        this.specs.selectedImage = "image";
        console.log(this.specs);
        this.spinner.hide();
        this.amountChanged(1);
      },
      error: (error: any) => {
        console.error('Error retrieving transaction:', error);
      },
    };
    this.landingservice.getprod(model).subscribe(observer);
  }
  selectImage(image:string){
    this.specs.selectedImage=image
    console.log(this.specs)
  }
  goback(){
    this.router.navigate(['/']);
  }
  amountChanged(number : any){
    console.log("amountChanged",number)
    let numericValue = +this.specs.price.replace(/[^0-9.]/g, '');
    this.price = numericValue*number
    this.discount = (this.price/100)*5
    this.Total = this.price - this.discount
    console.log("Pay",numericValue)
  }

  placeOrder(){
    this.validate()
  }
  validname:boolean=true
  validmobile:boolean=true
  validemail:boolean=true
  validpost:boolean=true
  validadd1:boolean=true
  validadd2:boolean=true
  validadd3:boolean=true
  validate(){
    this.validateName()
    this.validateMobile()
    this.validateEmail()
    this.validatepost()
    this.validateadd1()
    this.validateadd2()
    this.validateadd3()
    if(this.validname&&this.validmobile&&this.validemail&&this.validpost&&this.validadd1&&this.validadd2&&this.validadd3){
      this.createobj()
    }
  }
  createobj(){
    this.spinner.show();
    let orderDetails = {
      id:'',
      product:"CC",
      model: this.pcmodel,
      billingAmount: this.Total,
      name: this.name,
      mobile: this.mobile,
      email:this.email ,
      post:this.post ,
      add1:this.add1 ,
      add2:this.add2 ,
      add3:this.add3 ,
      payMethod: this.payMethod,
      status:"new"
    }
    this.landingservice.createorder(orderDetails).subscribe(
      (response) => {
        this.spinner.hide();
        console.log("responce ", response);
      },
      (error) => {
        this.spinner.hide();
        console.log("responce ", error.error.text);
      }
    );
    console.log("orderDetails",orderDetails)
  }
  validateName(){
    if(this.name == ""){
      this.validname=false
    }else{
      this.validname=true
    }
  }
  validateMobile(){
    const digitRegex = /^\d+$/;
    if(this.mobile == ""||this.mobile.length>10 || !digitRegex.test(this.mobile)){
      this.validmobile=false
    }else{
      this.validmobile=true
    }
  }
  validateEmail(){
    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      this.validemail = emailRegex.test(this.email);
  }
  validatepost(){
    if(this.post == ""){
      this.validpost=false
    }else{
      this.validpost=true
    }
  }
  validateadd1(){
    if(this.add1 == ""){
      this.validadd1=false
    }else{
      this.validadd1=true
    }
  }
  validateadd2(){
    if(this.add2 == ""){
      this.validadd2=false
    }else{
      this.validadd2=true
    }
  }
  validateadd3(){
    if(this.add3 == ""){
      this.validadd3=false
    }else{
      this.validadd3=true
    }
  }

}
