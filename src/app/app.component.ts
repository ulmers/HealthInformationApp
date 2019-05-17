import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IronPidginApp';

  loginRegisterSelection = '';

  getLoginRegisterSelection(): string {
    return this.loginRegisterSelection || '';
  }

  setLoginRegisterSelection(clicked: string) {
    this.loginRegisterSelection = clicked;
  }
}
