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
  model: string="";
  specs:any={};
  price:any=0.00
  discount:any=0.00
  Total:any=0.00
  amount: any = 1

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
    this.route.params.subscribe(params => {
      this.model = params['model'];
      // Now you can use this.model in your component
    });
    this.titleService.setTitle( 'Buy '+this.model+' | CChips');
    this.getProd(this.model)

  }
  getProd(model:any){
    this.spinner.show()
    const observer = {
      next: (data: any) => {
        this.specs=data[0]
        this.specs.image=this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'+this.specs.image)
        this.specs.image2=this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'+this.specs.image2)
        this.specs.image3=this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'+this.specs.image3)
        this.specs.selectedImage="image"
        console.log(this.specs)
        this.spinner.hide()
        this.amountChanged(1)
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
}
