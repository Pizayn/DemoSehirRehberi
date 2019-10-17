import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; //api kullanmamızı sağlar
import {RouterModule} from '@angular/router';
import {appRoutes} from './route';
import { NgxGalleryModule } from 'ngx-gallery';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {AlertifyService} from './services/alertify.service';
import {NgxEditorModule} from 'ngx-editor';
import { PopoverConfig } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { from } from 'rxjs';
import { ValueComponent } from './value/value.component';
import {CityDetailComponent} from './city/city-detail/city-detail.component';
import {CityAddComponent} from './city/city-add/city-add.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      CityComponent,
      ValueComponent,
      CityDetailComponent,
      CityAddComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      FormsModule,
      ReactiveFormsModule,
      NgxEditorModule,
      
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
