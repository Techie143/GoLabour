import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Response } from '../schema/response';

@Component({
  selector: 'app-lsignup',
  templateUrl: './lsignup.component.html',
  styleUrls: ['./lsignup.component.css']
})
export class LsignupComponent implements OnInit {

   constructor(private http: HttpServiceService, private dialog: MatDialog  , private response : Response) { 
     response = new Response();

   }

  ngOnInit() {
  }
    lsignup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl('', Validators.required),
})

getErrorMessage() {
  return this.lsignup.get('email').hasError('required') ? 'You must enter a value' :
    this.lsignup.get('email').hasError('email') ? 'Not a valid email' :
      '';
}

onSubmit() {
  console.log(this.lsignup.value);
  this.http.ajaxCall(this.lsignup.value, "register/labour").subscribe(result => {
   console.log(result);
   this.dialog.open(ContinueDialog2, {
    width: '70%',
    data: {
      value: result['o']
    }
  });
});
}
}

@Component({
  selector: 'continue-dialog',
  templateUrl: 'continue-dialog.html',
})
export class ContinueDialog2 {
 message: object;
 constructor(
   public dialogRef: MatDialogRef<ContinueDialog2>, @Inject(MAT_DIALOG_DATA) private data: any, public router: Router) {
   this.message = data.value;
 }

 close(): void {
   this.dialogRef.close();
   this.router.navigateByUrl("/lsignin");
 }}