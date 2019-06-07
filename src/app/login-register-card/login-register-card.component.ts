import {Component, OnDestroy, OnInit} from '@angular/core';
import { LoginRegisterSelectionService } from '../services/login-register-selection.service';
import { Router, ActivatedRoute} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PatientService } from '../services/patient.service';
import {AuthenticateService} from '../services/authenticate.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-register-card',
  templateUrl: './login-register-card.component.html',
  styleUrls: ['./login-register-card.component.css']
})
export class LoginRegisterCardComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  selection: string;
  selectionIndex: number;

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

  ngOnInit() {
    this.loginRegisterSelectionService.selectionObserver.pipe(takeUntil(this.unsubscribe$)).subscribe(
      selection => {
        this.selection = selection;

        if (selection === 'Login') {
          this.selectionIndex = 0;
        } else if (selection === 'Register') {
          this.selectionIndex = 1;
        } else {
          this.selectionIndex = null;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setSelection(selection: string) {
    this.loginRegisterSelectionService.setSelection(selection);
  }

  setSelectionWithIndex(index: number) {
    if (index === 0) {
      this.setSelection('Login');
    } else if (index === 1) {
      this.setSelection('Register');
    } else {
      this.setSelection('');
    }
  }

  onClickLoginRegister() {
    if (this.selection === 'Login') {
      this.authenticateService.authenticate(this.email, this.password).subscribe(resp => {
        console.log(resp);
        this.cookieService.set('token', resp.body['token']);
        this.loginRegisterSelectionService.setSelection('');
        this.patientService.checkIsLoggedIn();
        this.router.navigate(['/dashboard']);
      });
    }
    if (this.selection === 'Register') {
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
