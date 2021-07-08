import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TestBindingComponent } from './test-binding/test-binding.component';
import { ServerComponent } from './server/server.component';
import { AssisgmentComponent } from './assisgment/assisgment.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { IfForRecapeComponent } from './if-for-recape/if-for-recape.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TestBindingComponent,
    ServerComponent,
    AssisgmentComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    IfForRecapeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
