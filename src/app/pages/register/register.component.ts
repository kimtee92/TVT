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
    private driverService: DriverService
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 3dd6565... registration complete
=======
>>>>>>> parent of 3dd6565... registration complete
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 5737e83... Revert "registration complete"
         this.driverService.register(this.registerForm.value)
             .pipe(first())
             .subscribe(
                 data => {
                  swal({
<<<<<<< HEAD
                    //show success alert if register successful
=======
>>>>>>> parent of 5737e83... Revert "registration complete"
                    type: 'success',
                    title: 'Registration Success!',
                    text: '',
                  });
                 },
                 error => {
                  swal({
<<<<<<< HEAD
                    //show error alert if register is failed
=======
>>>>>>> parent of 5737e83... Revert "registration complete"
                    type: 'error',
                    title: 'Registration Error',
                    text: 'Please refresh page and try again',
                  });
                 });
<<<<<<< HEAD
>>>>>>> dev
=======
>>>>>>> parent of 3dd6565... registration complete
=======
>>>>>>> parent of 3dd6565... registration complete
=======
>>>>>>> parent of 5737e83... Revert "registration complete"
  }

}
