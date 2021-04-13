import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignOnComponent } from './pages/sign-on/sign-on.component';
import { AppViewComponent } from './pages/app-view/app-view.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { PopupMaskComponent } from './components/popup-mask/popup-mask.component';

@NgModule({
  declarations: [
    AppComponent,
    SignOnComponent,
    AppViewComponent,
    InputComponent,
    PopupMaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
