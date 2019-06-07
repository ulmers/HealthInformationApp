import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterSelectionService {

  private selectionSubject = new BehaviorSubject<string>('');
  public selectionObserver = this.selectionSubject.asObservable();

  constructor() { }

  setSelection(selection: string) {
    this.selectionSubject.next(selection);
  }

}
