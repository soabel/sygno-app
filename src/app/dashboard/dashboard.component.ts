import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../transport/response/login.response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user = '';
  constructor() { }

  ngOnInit(): void {
    const auth = JSON.parse(sessionStorage.getItem('auth')) as LoginResponse;
    this.user = auth.userData.email;
  }

}
