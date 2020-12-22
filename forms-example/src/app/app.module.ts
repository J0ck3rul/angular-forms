import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AddressInformationComponent } from './address-information/address-information.component';
import { OptionalInformationComponent } from './optional-information/optional-information.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PersonalInformationComponent,
    AddressInformationComponent,
    OptionalInformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
