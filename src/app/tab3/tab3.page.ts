import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listaPedidos= [];

  constructor(private router:Router, private ar:ActivatedRoute) {

    this.ar.queryParams.subscribe(() => {
      if(this.router.getCurrentNavigation().extras.state){
        this.listaPedidos = this.router.getCurrentNavigation().extras.state.pedido;
        this.calcularPago();
        console.log(this.listaPedidos)
      }
    })

  }

  borrar(item){
    this.listaPedidos=this.listaPedidos.filter((e)=>e!=item);
    this.calcularPago();
  }

  pagoFinal: number=0;
  
  calcularPago(){
    this.pagoFinal=0;
    for(const i of this.listaPedidos){
      this.pagoFinal+=i.precio; 
    }

    console.log(this.pagoFinal)
  }

}