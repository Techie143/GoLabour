import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Material Import 
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';

//Component
import { HomeComponent } from './home/home.component';
import { SigninComponent, ForgetPassword, VerificationDialog, AuthenticateDialog } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent, ViewDialog, NotifyDialog } from './search/search.component';
import { SignupComponent, ContinueDialog } from './signup/signup.component';
import { ProfileComponent, ConfirmDialog } from './profile/profile.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { Data } from './schema/data';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './services/http-service.service';
import { Pojo } from './schema/pojo';
import { MainComponent, Instruction1, Instruction2, Help } from './main/main.component';
import { AccountComponent, ConfirmBox, PromptBox} from './account/account.component';
import { Response } from './schema/response';
import { LsignupComponent, ContinueDialog2 } from './lsignup/lsignup.component';
import { LsigninComponent, AuthenticateDialog2, ForgetPassword2, VerificationDialog2 } from './lsignin/lsignin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    ForgetPassword,
    SearchComponent,
    SignupComponent,
    VerificationDialog,
    AuthenticateDialog,
    AuthenticateDialog2,
    ProfileComponent,
    ViewDialog,
    NotifyDialog,
    ConfirmDialog,
    ContinueDialog,
    ContinueDialog2,
    Instruction1,
    Instruction2,
    Help,
    MainComponent,
    AccountComponent,
    ConfirmBox,
    PromptBox,
    LsignupComponent,
    LsigninComponent,
    ForgetPassword2,
    VerificationDialog2
  ],
  entryComponents: [
    ForgetPassword,
    ForgetPassword2,
    VerificationDialog,
    VerificationDialog2,
    AuthenticateDialog,
    AuthenticateDialog2,
    ViewDialog,
    NotifyDialog,
    ConfirmDialog,
    ContinueDialog,
    ContinueDialog2,
    Instruction1,
    Instruction2,
    Help,
    ConfirmBox,
    PromptBox
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatTableModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  providers: [AuthGaurdService, Data, HttpServiceService, Pojo, Response],
  bootstrap: [AppComponent]
})
export class AppModule { }
