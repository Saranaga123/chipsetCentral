import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandBoxPaymentGatewayComponent } from './sand-box-payment-gateway.component';

describe('SandBoxPaymentGatewayComponent', () => {
  let component: SandBoxPaymentGatewayComponent;
  let fixture: ComponentFixture<SandBoxPaymentGatewayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SandBoxPaymentGatewayComponent]
    });
    fixture = TestBed.createComponent(SandBoxPaymentGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
