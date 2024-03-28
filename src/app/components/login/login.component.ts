import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingService } from 'src/app/services/landing.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:any=""
  password:any=""
  invalid:boolean=false
  constructor(
    private router: Router,
    private landingservice : LandingService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private activeModal: NgbActiveModal,
    private modalService : NgbModal,
  ) {
  }
  ngOnInit(): void {

  }
  closeModal() {
    this.activeModal.close('Modal closed');
  }
  register(){
    const modalRef = this.modalService.open(RegisterComponent, {
      size: 'md',
    });

    modalRef.result.then(
      (result) => {
        console.log('Modal closed with result:', result);
      },
      (reason) => {
        console.log('Modal dismissed with reason:', reason);
      }
    );
    this.activeModal.close('Modal closed');
  }
  submituserdata(){
    this.spinner.show();
    let obj = {
      id:this.username,
      pw:this.password
    }
    this.username=""
    this.password=""
    console.log("Data", obj)
    this.landingservice.login(obj).subscribe(
      (response) => {
        this.spinner.hide();
        console.log("good responce ", response);
        sessionStorage.setItem("userdata",JSON.stringify(response) )

        this.invalid=false
        this.closeModal()
      },
      (error) => {
        this.spinner.hide();
        console.log("bad responce ", error.error.text);
        this.invalid=true
      }
    );
  }
}
