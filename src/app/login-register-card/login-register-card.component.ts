import {Component, OnInit} from '@angular/core';
import {LoginRegisterSelectionService} from '../login-register-selection.service';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-login-register-card',
  templateUrl: './login-register-card.component.html',
  styleUrls: ['./login-register-card.component.css']
})
export class LoginRegisterCardComponent implements OnInit {

  email = '';

  password = '';

  confirmPassword = '';

  constructor(private loginRegisterSelectionService: LoginRegisterSelectionService, private patientService: PatientService) { }

  ngOnInit() {
  }

  getSelection(): string {
    return this.loginRegisterSelectionService.getSelection();
  }

  getDisplay() {
    if (this.getSelection() === '') {
      return 'none';
    }
    return 'inline-block';
  }

  getIndex(): number {
    if (this.getSelection() === 'Login') {
      return 0;
    }
    if (this.getSelection() === 'Register') {
      return 1;
    }
    return null;
  }

  onClickLoginRegister() {
    if (this.getSelection() === 'Login') {

    }
    if (this.getSelection() === 'Register') {
      this.patientService.postPatient(this.email, this.password, this.confirmPassword).subscribe( resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
    }
  }

  cancel() {
    this.loginRegisterSelectionService.setSelection('');
  }

}
