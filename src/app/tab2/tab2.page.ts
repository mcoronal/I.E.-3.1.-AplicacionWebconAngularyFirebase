import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  lista: any;

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  getMontaditosdelaCasa(){

    this.service.getMontaditosdelaCasa().subscribe( response => {

      this.lista = response;
      console.log(response);
    },
    error => {
      console.log(error);
    }
    )
  }
}
