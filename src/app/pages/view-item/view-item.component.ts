import { Component } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingService } from 'src/app/services/landing.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})

export class ViewItemComponent {
  model: string="";
  specs:any={};
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
    this.titleService.setTitle(this.model+' | CChips');
    this.getProd(this.model)
  }
  getProd(model:any){
    this.spinner.show()
    const observer = {
      next: (data: any) => {

        this.specs=data[0]
        console.log(this.specs)
        this.spinner.hide()
      },
      error: (error: any) => {
        console.error('Error retrieving transaction:', error);
      },
    };

    this.landingservice.getprod(model).subscribe(observer);
  }
}
