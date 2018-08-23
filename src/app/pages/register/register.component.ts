import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      licenseNo: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required],
      adress: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid registraion form");
      return;
    }

    //      this.loading = true;
    //      this.userService.register(this.registerForm.value)
    //          .pipe(first())
    //          .subscribe(
    //              data => {
    //                  this.alertService.success('Registration successful', true);
    //                  this.router.navigate(['/login']);
    //              },
    //              error => {
    //                  this.alertService.error(error);
    //                  this.loading = false;
    //              });
  }

}
