import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginRequest } from 'src/app/transport/request/login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }


  ngOnInit(): void {
    // this.form = new FormGroup({
    //   email: new FormControl(''),
    //   password: new FormControl('')
    // });

    // this.form = this.formBuilder.group({
    //   email: [new FormControl('')],
    //   password: new FormControl('')
    // });

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      // email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  login(): void {

    const request = this.form.value as LoginRequest;

    this.authService.login(request).subscribe(res => {

      res.userData = { email: request.email };

      sessionStorage.setItem('auth', JSON.stringify(res));

      this.router.navigate(['']);
    },
      err => {
        console.log(err);
      },
      () => {

      })

  }

}
