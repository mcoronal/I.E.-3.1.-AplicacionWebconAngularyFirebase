import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  async getMontaditosdelaCasa(){
    const endPoint="https://comandabar-1fd11-default-rtdb.firebaseio.com/MontaditosdelaCasa.json";
    return this.http.get(endPoint).toPromise<any>();
  ​​​ }

  async getMontaditosClasicos(){
    const endPoint="https://comandabar-1fd11-default-rtdb.firebaseio.com/MontaditosClasicos.json";
    return this.http.get(endPoint).toPromise<any>();
  ​​​ }
  
  async getMontaditosEspeciales(){
    const endPoint="https://comandabar-1fd11-default-rtdb.firebaseio.com/MontaditosEspeciales.json";
    return this.http.get(endPoint).toPromise<any>();
  ​​​ }

  async getBebidas(){
    const endPoint="https://comandabar-1fd11-default-rtdb.firebaseio.com/Bebidas.json";
    return this.http.get(endPoint).toPromise<any>();
  ​​​ }​
​
  }
