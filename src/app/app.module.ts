import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { GridModule } from '@progress/kendo-angular-grid';
import {NgAutoCompleteModule} from "ng-auto-complete";



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {
	CuiAlertModule,
	CuiHeaderModule,
	CuiInputModule,
	CuiFooterModule,
	CuiSpinnerModule,
	CuiToastModule,
} from '@cisco-ngx/cui-components';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
	declarations: [
		AppComponent,
		DatepickerComponent,
		CustomerComponent,
	],
	imports: [
		BrowserModule,
		RouterModule,
		HttpClientModule,
		CuiAlertModule,
		CuiHeaderModule,
		CuiInputModule,
		CuiFooterModule,
		CuiSpinnerModule,
		CuiToastModule,
    BrowserAnimationsModule,
    ChartsModule,
		RouterModule.forRoot([
      { path: 'customer', component: CustomerComponent }
    ]),
    GridModule,
    NgAutoCompleteModule


  ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
