import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprobantes-list',
  templateUrl: './comprobantes-list.component.html',
  styleUrls: ['./comprobantes-list.component.scss']
})
export class ComprobantesListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  nuevo():void{
    this.router.navigate(['comprobantes/create']);
  }

}
