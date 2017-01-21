import {Injectable, Inject} from "@angular/core";

import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL_RENTEDCARS, BASE_URL_CARS, BASE_URL_CUSTOMERS} from "../app.tokens";
import {Observable} from "rxjs";
import {RentedCar} from "../entities/rentedCar";

@Injectable()
export class RentedCarService{

  rentedCarId:number;

  constructor(
    @Inject(BASE_URL_RENTEDCARS) private baseUrl: string,
    @Inject(BASE_URL_CARS) private carUrl: string,
    @Inject(BASE_URL_CUSTOMERS) private customerUrl: string,
    private http: Http){

  }




  getId(id:number): void {
    let url = this.baseUrl + "/search/findRentedCarId";
    let search = new URLSearchParams();
    search.set('customer', sessionStorage.getItem("customer"));
    search.set('car', id.toString());

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json())
      .subscribe(id => {
        this.rentedCarId = id;
        this.deleteRentedCarEntry(this.rentedCarId);
        location.reload();
      },
          error => console.log(error)
      );

  }


  deleteRentedCarEntry(rowID:number): void {
    let url = this.baseUrl+"/"+rowID;

    this.http
      .delete(url)
      .map(resp => resp.json())
      .subscribe(res => res,
                 error => console.log(error)
      )
}

findRentedCar(car:string): Observable<RentedCar> {
  let url = this.baseUrl + "/search/findRentedCar";
  let search = new URLSearchParams();
  search.set('customer', sessionStorage.getItem("customer"));
  search.set('car', car.toString());


  let headers = new Headers();
  headers.set('Accept', 'application/json');

  return this
    .http
    .get(url, { headers, search })
    .map(resp => resp.json());
}

save (rentedCar:RentedCar): Observable<RentedCar> {
  let url = this.baseUrl+"/"+rentedCar.id;


  let headers = new Headers();
  headers.set('Accept', 'application/json');

  return this
    .http
    .put(url, rentedCar, {headers})
    .map(resp => resp.json());
}

saveNewEntry(carId:string, leaseTime:number):void{
  let url = this.baseUrl;

  let car = this.carUrl+"/"+carId;
  let customer = this.baseUrl+"/"+sessionStorage.getItem("customer");

  let headers = new Headers();
  headers.set('Accept', 'application/json');

   this
    .http
    .post(url,{car, customer,leaseTime}, {headers})
    .map(resp => resp.json()).subscribe();
}

}
