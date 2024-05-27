import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingService } from 'src/app/services/landing.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name:any=""
  email:any=""
  nic:any=""
  occupation:any=""
  bod:any=""
  gender:any=""
  vname:boolean=true
  vemail:boolean=true
  vnic:boolean=true
  voccupation:boolean=true
  vbod:boolean=true
  vgender:boolean=true
  validemail:boolean=true
  password:any="sara"

  Validform:boolean=true
  constructor(
    private router: Router,
    private landingservice : LandingService,
    private spinner: NgxSpinnerService,
    private datePipe: DatePipe,
    private activeModal: NgbActiveModal,

  ) {
  }
  submitform(){
    this.Validate()
  }
  Validate(){
    this.validateEmail()
    if(this.name==""){
      this.vname = false
    }else{
      this.vname = true
    }

    if(this.email==""){
      this.vemail = false
    }else{
      this.vemail = true
    }

    if(this.nic==""){
      this.vnic = false
    }else{
      this.vnic = true
    }

    if(this.occupation==""){
      this.voccupation = false
    }else{
      this.voccupation = true
    }

    if(this.bod==""){
      this.vbod = false
    }else{
      this.vbod = true
    }

    if(this.gender==""){
      this.vgender = false
    }else{
      this.vgender = true
    }


    if(this.vgender&&this.vbod&&this.voccupation&&this.vnic&&this.vemail&&this.vname&&this.validemail){
      this.Validform=true
      this.createobj()
    }else{
      this.Validform=false
    }
  }
  validateEmail(){
    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      this.validemail = emailRegex.test(this.email);
  }
  createobj(){
    this.spinner.show();
    let userdata = {
      id:'',
      name:this.name,
      password:this.password,
      role:"user",
      email:this.email,
      nic:this.nic,
      occupation: this.occupation,
      bod: this.bod,
      gender:this.gender,
      image:"",
      status:"active"
    }
    this.landingservice.createuser(userdata).subscribe(
      (response) => {
        this.spinner.hide();
        if(response){
          this.activeModal.close('Modal closed');
        }
      },
      (error) => {
        this.spinner.hide();
        console.log("responce bad", error.error.text);

      }
    );
  }
}
