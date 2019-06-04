import { Component, OnInit } from '@angular/core';
import { LoginRegisterSelectionService } from '../services/login-register-selection.service';
import { Router, ActivatedRoute} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PatientService } from '../services/patient.service';
import {AuthenticateService} from '../services/authenticate.service';

@Component({
  selector: 'app-login-register-card',
  templateUrl: './login-register-card.component.html',
  styleUrls: ['./login-register-card.component.css']
})
export class LoginRegisterCardComponent implements OnInit {

  email = '';

  password = '';

  confirmPassword = '';

  constructor(
    private loginRegisterSelectionService: LoginRegisterSelectionService,
    private cookieService: CookieService,
    private patientService: PatientService,
    private authenticateService: AuthenticateService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { }

  getSelection(): string {
    return this.loginRegisterSelectionService.getSelection();
  }

  isVisible() {
    if (this.getSelection() === '') {
      return false;
    }
    return true;
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
      this.authenticateService.authenticate(this.email, this.password).subscribe(resp => {
        console.log(resp);
        this.cookieService.set('token', resp.body['token']);
        this.patientService.checkIsLoggedIn();
        this.router.navigate(['/dashboard']);
      });
    }
    if (this.getSelection() === 'Register') {
      this.patientService.postPatient(this.email, this.password, this.confirmPassword).subscribe( resp => {
        console.log(resp);
        this.cookieService.set('token', resp.body['token']);
        this.loginRegisterSelectionService.setSelection('');
        this.patientService.checkIsLoggedIn();
        this.router.navigate(['/dashboard']);

      }, error => {
        console.log(error);
      });
    }
  }

  cancel() {
    this.loginRegisterSelectionService.setSelection('');
  }

}
