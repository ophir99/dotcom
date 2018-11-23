import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppBarComponent } from "./legos/app-bar/app-bar.component";
import { WidgetsModule } from "./widgets/widgets.module";
import { FooterComponent } from "./legos/footer/footer.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, AppBarComponent, FooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
