import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Data } from '../schema/data';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../services/auth-gaurd.service';
import { HttpServiceService } from '../services/http-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl('', Validators.required),
    userContact: new FormGroup({
      address1: new FormControl('', Validators.required),
      address2: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
    }),
  });

  labourProfile = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl('', Validators.required),
    address1: new FormControl('', Validators.required),
    address2: new FormControl(''),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipcode: new FormControl('', Validators.required),
    skill: new FormControl(''),
    other: new FormControl(''),
    work: new FormControl(''),
    price: new FormControl('', Validators.required)
  });

  works = [
    "Full Time",
    "Part Time"
  ];

  skills = [];

  constructor(private schema: Data, private dialog: MatDialog, private router: Router,
    private auth: AuthGaurdService, private http: HttpServiceService) {
  }

  ngOnInit() {
    // if (this.auth.getSession("option") == "user") {
    //   let api = "getUserProfile";
    //   let object = this.auth.getSession("email");
    //   this.http.getLogin(object).subscribe(result => {
    //     console.log(result);
    //     this.setUserProfile(this.modal.setUserProfile(result));
    //   });
    // }
    // else {
    //   let api = "getLabourProfile";
    //   let object = this.auth.getSession("email");
    //   this.http.getLogin(object).subscribe(result => {
    //     console.log(result);
    //     this.setLabourProfile(this.modal.setLabourProfile(result));
    //   });
    // }
    // let api = "getSkills";
    // this.http.callGet().subscribe(result => {
    //   console.log(result);
    //   console.log(this.modal.setResponse(result));
    //   this.skills = this.modal.setResponse(result).message.filter((elem, i, arr) => {
    //     if (arr.indexOf(elem) === i) {
    //       return elem.skill_type;
    //     }
    //   })
    // })
  }

  setUserProfile(data) {
    this.userProfile.patchValue({
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
    })
    if (data.user != null) {
      this.userProfile.patchValue({
        'userContact': {
          address1: data.user.address1,
          address2: data.user.address2,
          city: data.user.city,
          state: data.user.state,
          zipcode: data.user.zipcode
        }
      })
    }
  }

  setLabourProfile(data) {
    this.labourProfile.patchValue({
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
    })
    if (data.address != null) {
      this.labourProfile.patchValue({
        address1: data.address.address1,
        address2: data.address.address2,
        city: data.address.city,
        state: data.address.state,
        zipcode: data.address.zipcode
      })
    }
    if (data.skill != null) {
      this.labourProfile.patchValue({
        skill: data.skill.skill_type,
        work: data.skill.work,
        price: data.skill.salary
      })
    }
  }

  checkUser() {
    if (sessionStorage.getItem("option") == "user") {
      return true;
    }
    return false;
  }

  onSubmit() {
    // const dialogRef = this.dialog.open(ConfirmDialog, {
    // });
    // let check: boolean = false;
    // let object: any;
    // let api: string;
    // if (this.auth.getSession("option") == "user") {
    //   console.log(this.userProfile.value);
    //   object = this.modal.createUser(this.userProfile.value);
    //   api = "updateUserProfile";
    //   check = true;
    // }
    // else {
    //   console.log(this.labourProfile.value);
    //   object = this.modal.createLabour(this.labourProfile.value);
    //   api = "updateLabourProfile";
    //   check = true;
    // }
    // if (check) {
    //   dialogRef.afterClosed().subscribe(result => {
    //     if (result != null) {
    //       console.log(result);
    //       this.http.getLogin(object).subscribe(result => {
    //         console.log(result);
    //         check = this.modal.setResponse(result);
    //         this.router.navigateByUrl("/Home");
    //       });
    //     }
    //   });
    // }
  }
}


@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.html'
})

export class ConfirmDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmDialog>) {

  }

  goOff() {
    this.dialogRef.close();
  }
}
