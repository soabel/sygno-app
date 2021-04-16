import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  model: any;
  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.find();
  }

  nuevo(): void {

  }

  find(): void {
    
    console.log('find');
    this.clientesService.findAll().subscribe(res => {
      this.model = res;
    })
  }

}
