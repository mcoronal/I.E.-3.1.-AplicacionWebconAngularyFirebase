import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getMontaditosdelaCasa(): Observable<any>{
    const endPoint="https://comandabar-1fd11-default-rtdb.firebaseio.com/MontaditosdelaCasa.json";
    return this.http.get(endPoint);
  ​​​ }
  
  getMontaditosEspeciales(): Observable<any>{
    const endPoint="https://comandabar-1fd11-default-rtdb.firebaseio.com/MontaditosEspeciales.json";
    return this.http.get(endPoint);
  ​​​ }
  
  getMontaditosClasicos(): Observable<any>{
    const endPoint="https://comandabar-1fd11-default-rtdb.firebaseio.com/MontaditosClasicos.json";
    return this.http.get(endPoint);
  ​​​ }
  
  getBebidas(): Observable<any>{
    const endPoint="https://comandabar-1fd11-default-rtdb.firebaseio.com/Bebidas.json";
    return this.http.get(endPoint);
  ​​​ }​
​​​
  }
