import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2';
import { DriverService } from '../../shared/_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],      
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      licenseNo: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required]
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

         this.driverService.register(this.registerForm.value)
             .pipe(first())
             .subscribe(
                 data => {
                  swal({
                    type: 'success',
                    title: 'Registration Success!',
                    text: '',
                  });
                  this.router.navigate(['/login']);
                 },
                 error => {
                  swal({
                    type: 'error',
                    title: 'Registration Error',
                    text: 'Please refresh page and try again',
                  });
                 });
  }

}