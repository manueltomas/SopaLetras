import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { FormsModule } from '@angular/forms';
import { SopaFeitaComponent } from './sopa-feita/sopa-feita.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    SopaFeitaComponent
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
