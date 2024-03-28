import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.scss']
})
export class OrdersuccessComponent {
  constructor(
    private activeModal: NgbActiveModal,
  ) {
  }
  close(){
    this.activeModal.close('Modal closed');
  }
}
