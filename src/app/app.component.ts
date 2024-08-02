import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdersComponent } from './pages/landing/popup/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chipsetCentral';
  imgf:boolean=true
  img1:boolean=false
  img11:boolean=true
  img2:boolean=true
  img3:boolean=true
  img4:boolean=true
  img5:boolean=true
  img6:boolean=true
  userName :any= ""
  chat:boolean=false
  prod:any=[]

  constructor(
    private modalService : NgbModal,
  ) {
    // this.spinner.show()
  }
  ngOnInit(): void {

  }
  ChatBOT(){
    // const modalRef = this.modalService.open(ChatbotComponent, {
    //   size: 'md',
    // });
    console.log(this.chat)
    if(this.chat==false){
      this.chat=true
    }else{
      this.chat=false
    }
    console.log(this.chat)
  }
  checkuser(){
    let userlogs = sessionStorage.getItem("userdata")
    if(userlogs){
      console.log("already logged ")
      let userdata= JSON.parse(userlogs)
      const modalRef = this.modalService.open(OrdersComponent, {
        size: 'lg',
      });
      modalRef.componentInstance.data = userdata.email;
      modalRef.result.then(
        (result) => {
          console.log('Modal closed with result:', result);
          this.fetchuser2();
        },
        (reason) => {
          console.log('Modal dismissed with reason:', reason);
        }
      );
    }else{
      const modalRef = this.modalService.open(LoginComponent, {
        size: 'md',
      });

      modalRef.result.then(
        (result) => {
          console.log('Modal closed with result:', result);
          this.fetchuser2();
        },
        (reason) => {
          console.log('Modal dismissed with reason:', reason);
        }
      );
    }
  }
  fetchuser2(){
    let user = sessionStorage.getItem("userdata")
    if(user){
      let userdata= JSON.parse(user)
      console.log("send email :",userdata.email)
      this.userName=userdata.name
      const modalRef = this.modalService.open(OrdersComponent, {
        size: 'lg',
      });

      // Pass email ID to modal component
      modalRef.componentInstance.data = userdata.email;

      modalRef.result.then(
        (result) => {
          console.log('Modal closed with result:', result);
          this.fetchuser2();
        },
        (reason) => {
          console.log('Modal dismissed with reason:', reason);
        }
      );
    }
  }
}
