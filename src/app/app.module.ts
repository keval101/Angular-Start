import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TestBindingComponent } from './test-binding/test-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TestBindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
