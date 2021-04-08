import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulos-edit',
  templateUrl: './articulos-edit.component.html',
  styleUrls: ['./articulos-edit.component.scss']
})
export class ArticulosEditComponent implements OnInit {

  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.id = param.id;
    })
  }

}
