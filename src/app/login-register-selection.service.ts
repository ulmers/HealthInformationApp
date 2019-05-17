import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterSelectionService {

  private selection = '';

  constructor() { }

  setSelection(selection: string) {
    this.selection = selection;
  }

  getSelection(): string {
    return this.selection;
  }
}
