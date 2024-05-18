import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.failIfHasTest, this.failIfHasWord('bad', 'bad_word', 'Contain bad word!')]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return; // Guard clause
    }
    console.log(this.loginForm.value);
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  failIfHasTest(control: AbstractControl) {
    if (!control.value.toLowerCase().includes('test')) {
      return null;
    } else {
      return { test_data: 'value is invalid' };
    }
  }

  failIfHasWord(word: string, errCode: string, errMsg: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.toLowerCase().includes(word)) {
        return { [errCode]: errMsg };
      }
      return null;
    };
  }
}
