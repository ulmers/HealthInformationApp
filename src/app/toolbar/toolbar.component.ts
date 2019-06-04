import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {LoginRegisterSelectionService} from '../services/login-register-selection.service';
import {PatientService} from '../services/patient.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  @Output() eventClicked = new EventEmitter<Event>();

  private unsubscribe$ = new Subject<void>();

  isLoggedIn: boolean;

  constructor(
    private loginRegisterSelectionService: LoginRegisterSelectionService,
    private patientService: PatientService,
    private cookieService: CookieService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.patientService.checkIsLoggedIn();
    this.patientService.isLoggedInObserver.pipe(takeUntil(this.unsubscribe$)).subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setSelection(selection: string) {
    this.loginRegisterSelectionService.setSelection(selection);
  }

  logout() {
    this.cookieService.deleteAll();
    this.patientService.checkIsLoggedIn();
    this.router.navigate(['/']);
  }

}
