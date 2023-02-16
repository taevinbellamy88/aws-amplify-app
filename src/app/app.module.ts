import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Component */
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NewsComponent } from './news/news.component';

/* AWS Amplify Auth */
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

/* Form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NewsComponent, RestaurantsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
