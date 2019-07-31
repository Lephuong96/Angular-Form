import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private mg: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.mg.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.mg.group({
        password: '',
        confirmPassword: ''
      }, {validator: comparePassword})
    });

    // update form state
    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }
  onSubmit() {}

}
