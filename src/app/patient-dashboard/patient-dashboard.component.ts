import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }



}
