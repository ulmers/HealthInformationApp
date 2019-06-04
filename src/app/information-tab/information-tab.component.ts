import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-information-tab',
  templateUrl: './information-tab.component.html',
  styleUrls: ['./information-tab.component.css']
})
export class InformationTabComponent implements OnInit {

  patient = new Patient();

  constructor(
    private patientService: PatientService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.patientService.getPatient().subscribe( resp => {

      this.patient = resp.body['patient'];
      this.cookieService.set('token', resp.body['token']);
    });
  }
}
