import { Component } from '@angular/core';
import { Navigation, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listaCasa: any = [];
  listaClasicos: any = [];
  listaEspeciales: any = [];
  listaBebidas: any = [];
  listaPedidos =[];

  constructor(private service: ServiceService, private router: Router, public alertController: AlertController) {}

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


  _getSelectedItem(selectedItem){


    if(!selectedItem.isChecked){
      
      this.listaPedidos.push(selectedItem)
    }
    
    console.log(selectedItem)
    console.log(this.listaPedidos)
  }
  
  async _sendData(){

    if (this.listaPedidos.length<1){
      const alert = await this.alertController.create({
        message: 'Por favor Seleccione un pedido.',
      });
  
      await alert.present();
    }
    else{let nav : NavigationExtras = {
      state: {pedido: this.listaPedidos}
    }

    this.router.navigate(['tabs/tab3'], nav);
    this.listaCasa.map(item=>{
      item.isChecked=false;
    })
    this.listaClasicos.map(item=>{
      item.isChecked=false;
    })
    this.listaBebidas.map(item=>{
      item.isChecked=false;
    })
    this.listaEspeciales.map(item=>{
      item.isChecked=false;
    })
    this.listaPedidos=[];
}
    
  }
}
