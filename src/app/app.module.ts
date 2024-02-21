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
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SpinnerComponent,
    ViewItemComponent
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
    HttpClientModule
  ],
  providers: [
    DatePipe,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
