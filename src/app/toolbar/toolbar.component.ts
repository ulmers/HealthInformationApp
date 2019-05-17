import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginRegisterSelectionService} from '../login-register-selection.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() eventClicked = new EventEmitter<Event>();

  constructor(private loginRegisterSelectionService: LoginRegisterSelectionService) { }

  ngOnInit() {
  }

  setSelection(selection: string) {
    this.loginRegisterSelectionService.setSelection(selection);
  }

}
