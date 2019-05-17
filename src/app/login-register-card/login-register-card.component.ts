import {Component, Input, OnInit} from '@angular/core';
import {LoginRegisterSelectionService} from '../login-register-selection.service';

@Component({
  selector: 'app-login-register-card',
  templateUrl: './login-register-card.component.html',
  styleUrls: ['./login-register-card.component.css']
})
export class LoginRegisterCardComponent implements OnInit {

  constructor(private loginRegisterSelectionService: LoginRegisterSelectionService) { }

  ngOnInit() {
  }

  getDisplay() {
    if (this.loginRegisterSelectionService.getSelection() === '') {
      return 'none';
    }
    return 'inline-block';
  }

  getIndex(): number {
    if (this.loginRegisterSelectionService.getSelection() === 'Register') {
      return 1;
    }
    if (this.loginRegisterSelectionService.getSelection() === 'Login') {
      return 0;
    }
    return null;
  }

  cancel() {
    this.loginRegisterSelectionService.setSelection('');
  }

}
