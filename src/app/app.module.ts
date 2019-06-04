import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { LoginRegisterCardComponent } from './login-register-card/login-register-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { RequestCardComponent } from './request-card/request-card.component';
import { CookieService } from 'ngx-cookie-service';
import {PatientService} from './services/patient.service';
import { InformationTabComponent } from './information-tab/information-tab.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginRegisterCardComponent,
    DashboardComponent,
    RequestCardComponent,
    InformationTabComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: environment.enableTracing}
    ),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CookieService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
