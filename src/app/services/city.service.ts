import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { City } from "../models/City";
import { Photo } from "../models/Photo";
import { Router } from "@angular/router";
import { AlertifyService } from "./alertify.service";

@Injectable()
export class CityService {
  constructor(private httpClient: HttpClient,
    private alertifyService:AlertifyService,
    private router:Router) {}
  path: string = "http://localhost:61061/api/";

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path + "cities");
  }
  getCityById(cityid): Observable<City> {
    return this.httpClient.get<City>(this.path + "cities/detail/?id=" + cityid);
  }
  getPhotosByCity(cityId): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(
      this.path + "cities/photos/?cityId=" + cityId
    );
  }
  add(city){
      this.httpClient.post(this.path + "cities/add",city).subscribe(data=>{
        this.alertifyService.success("sehir basariyla eklendi")

        this.router.navigateByUrl('/city/Detail/'+data["id"])

      });
  }
}
