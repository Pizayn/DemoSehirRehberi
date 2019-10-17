import { Component } from '@angular/core';
import { CityComponent } from './city/city.component';
import { Routes } from '@angular/router';
import { ValueComponent } from './value/value.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes:Routes =[
    {path:"city",component:CityComponent},
    {path:"register",component:RegisterComponent},
    {path:"value",component:ValueComponent},
    {path:"city/Detail/:cityId",component:CityDetailComponent},
    {path:"cityadd",component:CityAddComponent},

    
    
    //bu cityId parametresi componenetde params içine yazdığımız parametre
    {path:"**",redirectTo:"city",pathMatch:"full"},//bunların dışında bir şey gelrise city git
   //pathmatch full olarak adres eşleşmesi yapılır yani sadece city gelirse city gider harfi harfine aynı olması gerekir
]

