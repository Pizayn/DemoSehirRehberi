import { Component, OnInit } from "@angular/core";
import { CityService } from "src/app/services/city.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms"; //reaktif formlar için
import { from } from "rxjs";
import { City } from "src/app/models/City";


@Component({
  selector: "app-city-add",
  templateUrl: "./city-add.component.html",
  styleUrls: ["./city-add.component.css"],
  providers: [CityService]
})
export class CityAddComponent implements OnInit {
  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
   
  ) {}
  city: City;
  cityAddForm:FormGroup //bütün datayı burdan geçircez

  createCityForm(){
    this.cityAddForm=this.formBuilder.group(
      { name:["",Validators.required],//validators işlemleri
      description:["",Validators.required]}
    )
     

    
  }
  ngOnInit() {
    this.createCityForm();
  }
  add(){
    if(this.cityAddForm.valid){
      this.city=Object.assign({},this.cityAddForm.value)
      this.city.userId=1; // login işlemleri sonucunda yazıcaz
      this.cityService.add(this.city);
    }
  }
}
