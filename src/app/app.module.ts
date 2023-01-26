import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu/menu.component";
import {PolozkaFormularComponent} from "./polozka-formular/polozka-formular.component"
import {PolozkaStrankaComponent} from "./polozka-stranka/polozka-stranka.component"
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {PolozkaZoznamComponent} from "./polozka-zoznam/polozka-zoznam.component";
import {NakupFormularComponent} from "./nakup-formular/nakup-formular.component";
import {NakupStrankaComponent} from "./nakup-stranka/nakup-stranka.component";
import {NakupZoznamComponent} from "./nakup-zoznam/nakup-zoznam.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PolozkaFormularComponent,
    PolozkaStrankaComponent,
    PolozkaZoznamComponent,
    NakupFormularComponent,
    NakupStrankaComponent,
    NakupZoznamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
