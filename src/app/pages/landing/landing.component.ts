import { Component } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingService } from 'src/app/services/landing.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  imgf:boolean=true
  img1:boolean=false
  img11:boolean=true
  img2:boolean=true
  img3:boolean=true
  img4:boolean=true
  img5:boolean=true
  img6:boolean=true
  prod:any=[]

  constructor(
    private titleService: Title,
    private router: Router,
    private spinner: NgxSpinnerService,
    private landingservice : LandingService,
    private _sanitizer: DomSanitizer
  ) {
    // this.spinner.show()
  }
  ngOnInit(): void {

    this.titleService.setTitle('Landing | CChips');
    this.imgloop()
    console.log("prod",this.prod)
    this.LoadProd()
  }
  LoadProd(){

      const exproducts = sessionStorage.getItem("prod")
      if(exproducts){
         this.getProdList()
      }

  }
  getProdList(){
    sessionStorage.clear()
    this.prod=[]
    this.spinner.show()
    const observer = {
      next: (data: any) => {


        for(const element of data){

          const prodObj={
            name:element.name,
            userid:element.userid,
            buyerid:element.buyerid,
            description:element.description,
            available:element.available,
            status:element.status,
            category:element.category,
            price:element.price,
            image:this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'+element.image)

          }
          this.prod.push(prodObj)

          console.log("this.displaydata",this.prod)
        }
        sessionStorage.setItem("prod",JSON.stringify(this.prod))
        this.spinner.hide()
      },
      error: (error: any) => {
        console.error('Error retrieving transaction:', error);
      },
    };

    this.landingservice.getprodList().subscribe(observer);
  }
  imgloop(){
      setTimeout(() => {
        this.img1=false
        this.img11=false
        this.img2=true
      }, 3500);
      setTimeout(() => {
        this.img2=false
        this.img3=true
      }, 7000);
      setTimeout(() => {
        this.img3=false
        this.img4=true
      }, 10500);
      setTimeout(() => {
        this.img4=false
        this.img5=true
      }, 14000);
      setTimeout(() => {
        this.img5=false
        this.img6=true
      }, 17500);
      setTimeout(() => {
        this.img6=false
        this.img1=true
        this.img11=true
        this.imgloop()
      }, 21000);
  }
  viewItem(name:any){
    console.log("View Item : ",name)
    this.router.navigate(['/Product', name]);
  }
  buyItem(name:any){
    console.log("Buy Item : ",name)
    this.router.navigate(['/Buy', name]);
  }
  testdata:any=""
  displaytest(){
    console.log("Test > ",this.testdata)
  }
}
