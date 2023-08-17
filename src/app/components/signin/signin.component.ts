/**
 * @author Amit Singh
 */

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  form!: FormGroup;

  emailControl: FormControl | any;
  passwordControl: FormControl | any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
    this.createControls();
  }

  createControls(): void {
    this.emailControl = this.form.get('email');
    this.passwordControl = this.form.get('password');
  }

  login(): void {
    if (this.form.valid) {
      this.authService
        .login({
          email: this.form.value.email,
          password: this.form.value.password,
        })
        .then(() => {
          this.authService.setLoggedIn(true);
          this.router.navigate(['']);
        })
        .catch((err) => {
          alert('Wrong Credentials');
        });
    }
  }
}
