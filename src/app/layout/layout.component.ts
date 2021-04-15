import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../transport/response/login.response';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user='';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const auth = JSON.parse(sessionStorage.getItem('auth')) as LoginResponse;
    this.user = auth.userData.email;
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
