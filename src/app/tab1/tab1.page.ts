import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaCasa: any = [];
  listaClasicos: any = [];
  listaEspeciales: any = [];
  listaBebidas: any = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {

    this.getMontaditosdelaCasa();

    this.getMontaditosClasicos();

    this.getMontaditosEspeciales();

    this.getBebidas();
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  async getMontaditosdelaCasa(){

    this.listaCasa = await this.service.getMontaditosdelaCasa();
    console.log(this.listaCasa)
  }

  async getMontaditosClasicos(){

    this.listaClasicos = await this.service.getMontaditosClasicos();
    console.log(this.listaClasicos)
  }

  async getMontaditosEspeciales(){

    this.listaEspeciales = await this.service.getMontaditosEspeciales();
    console.log(this.listaEspeciales)
  }

  async getBebidas(){

    this.listaBebidas = await this.service.getBebidas();
    console.log(this.listaBebidas)
  }



}
