import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2';
import { DriverService } from '../../shared/services';
import countries from '../../../assets/countries.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loading = false;
  arrCountries: string[];

  constructor(
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.arrCountries = countries as string[];
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      licenseNo: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      contactNo: ['', [Validators.required, Validators.minLength(7), Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],
      address: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.loading = false;
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
          this.loading = false;
          swal({
            type: 'error',
            title: 'Registration Error',
            text: error,
          });
        });
  }

}