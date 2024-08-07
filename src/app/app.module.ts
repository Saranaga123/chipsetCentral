import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewItemComponent } from './pages/view-item/view-item.component';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { BuyComponent } from './pages/buy/buy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { OrdersuccessComponent } from './components/ordersuccess/ordersuccess.component';
import { SandBoxPaymentGatewayComponent } from './pages/sand-box-payment-gateway/sand-box-payment-gateway.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { OrdersComponent } from './pages/landing/popup/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SpinnerComponent,
    ViewItemComponent,
    BuyComponent,
    LoginComponent,
    OrdersuccessComponent,
    SandBoxPaymentGatewayComponent,
    ThankyouComponent,
    OrdersComponent,
    RegisterComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    NgxSpinnerModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
