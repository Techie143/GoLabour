import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../services/auth-gaurd.service';

@Component({
  selector: 'app-lsignin',
  templateUrl: './lsignin.component.html',
  styleUrls: ['./lsignin.component.css']
})
export class LsigninComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router,
    private http: HttpServiceService, private auth: AuthGaurdService) { }

  ngOnInit() {
  }

  lsignin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
})

getErrorMessage() {
  return this.lsignin.get('email').hasError('required') ? 'You must enter a value' :
    this.lsignin.get('email').hasError('email') ? 'Not a valid email' :
      '';
}

onSubmit() {
    
  console.log(this.lsignin.value);
  this.http.ajaxCall(this.lsignin.value, "getLogin/labour").subscribe(result => {
    console.log(result)
    if (result['status'] != false) {
      this.auth.setSession("log", "true");
      this.auth.setSession("name", result['o']);
      this.auth.setSession("email", this.lsignin.get('email').value);
      this.router.navigateByUrl("/Home");
    }
    else {
      this.dialog.open(AuthenticateDialog2, {
        width: '300px',
        data : {
          value : result['o']
        }
      });
    }
});
}


openDialog(): void {
  const dialogRef = this.dialog.open(ForgetPassword2, {
    width: '450px',
  });
  
  dialogRef.afterClosed().subscribe(result => {
    if (result != null) {
      console.log(result.value);
      this.dialog.open(VerificationDialog2, {
        width: '400px',
      });
    }
  });
}
}


@Component({
  selector: 'forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPassword2 {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    public dialogRef: MatDialogRef<ForgetPassword2>) { }

  onClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}
@Component({
  selector: 'verification-dialog',
  templateUrl: 'verification-dialog.html',
})
export class VerificationDialog2 {
  constructor(
    public dialogRef: MatDialogRef<VerificationDialog2>) { }

  close(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'authenticate-dialog',
 
  templateUrl: 'authenticate-dialog.html',
})
export class AuthenticateDialog2 {
  message: object;
  constructor(
    public dialogRef: MatDialogRef<AuthenticateDialog2>,@Inject(MAT_DIALOG_DATA) private data: any, public router: Router) {
      this.message = data.value;
     }

  close(): void {
    this.dialogRef.close();
  }
}