import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../services/auth-gaurd.service';
import { HttpServiceService } from '../services/http-service.service';

import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  option: string = "Alerts";
  username: string;
  mobile: string;
  email: string;

  userData : any;

  jobs = [];

  categories = [];

  address = [];

  editProfile = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    age: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  })

  password = new FormGroup({
    old: new FormControl('', Validators.required),
    new: new FormControl('', Validators.required),
  })

  createdJob = new FormGroup ({
    selectedCategory : new FormControl('', Validators.required),
    selectedDate : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required)
  })

  newAddress = new FormGroup ({
    house : new FormControl('',Validators.required),
    area : new FormControl('',Validators.required),
    pincode : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required),
  })  

  user;

  constructor(private router: Router, private guard: AuthGaurdService, private http: HttpServiceService, private dialog: MatDialog) {
    this.user = {
      email : this.guard.getSession("email")
    }
   }

  ngOnInit() {
    if(!this.guard.getSession("log"))
    {
      this.router.navigateByUrl("/Login");
    }
    else {
      //this.email = this.guard.getSession("email");
    }
  }

  getErrorMessage() {
    return this.editProfile.get('email').hasError('required') ? 'You must enter a value' :
      this.editProfile.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }


  account() {
    this.userData = null;

    console.log(this.user);
    this.http.ajaxCall(this.user, "getDetails/user").subscribe(res =>
    {
      console.log(res);
      if(res['status'] != false) {
        this.username = res['o'].name;
        this.email = res['o'].email;
        this.mobile = res['o'].mobile;
        this.userData = res['o'];
      }
    })
    this.option = "My Account";
  }

  editDetail(): void {
    this.editProfile.get('name').setValue(this.userData.name);
    this.editProfile.get('email').setValue(this.userData.email);
    this.editProfile.get('mobile').setValue(this.userData.mobile);
    this.editProfile.get('gender').setValue(this.userData.gender);
    this.editProfile.get('age').setValue(this.userData.age);
    this.option = "Edit Profile";
  }

  onClose(): void {
    this.option = "My Account";
  }

  onClose1(): void {
    this.option = "Edit Profile";
  }

  changePassword(): void {
    this.option = "Change Password";
  }

  updateChanges(): void {
    console.log(this.editProfile.value);
    this.userData.name = this.editProfile.get('name').value;
    this.userData.email = this.editProfile.get('email').value;
    this.userData.mobile = this.editProfile.get('mobile').value;
    this.userData.gender = this.editProfile.get('gender').value;
    this.userData.age = this.editProfile.get('age').value;
    console.log(this.userData);
    const dialogRef = this.dialog.open(ConfirmBox, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != false) {
        console.log(result);
        this.http.ajaxCall(this.userData, "updateProfile/user").subscribe(res => {
          if(res != false) {
            this.account();
          }
        })
      }
    });
  }

  updatePassword(): void {
    console.log(this.password.value);
    const dialogRef = this.dialog.open(ConfirmBox, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result);
        this.http.postUpdatePassword(this.email,this.password.value).subscribe(res => {
          if(res == true) {
            this.password.get('old').setValue('');
            this.password.get('new').setValue('');
            this.account();
          }
          else {
            this.dialog.open(PromptBox, {
              width:'250px',
            })
            this.option = "Change Password";
          }
        })
      }
    });
  }

  addAddress(): void {
    this.http.ajaxCall(this.user, "getDetails/user").subscribe(res =>
      {
        console.log(res);
        if(res['status'] != false) {
          this.userData = res['o'];
          this.address = this.userData.address;
        }
      })
    this.option = "Address";
  }

  addJob(): void {
    this.http.ajaxCall(this.user, "getDetails/user").subscribe(res =>
      {
        console.log(res);
        if(res['status'] != false) {
          this.userData = res['o'];
          this.jobs = this.userData.job;
        }
      })
    this.option = "Job Description";
  }

  createJob() : void {
    this.http.getCategory().subscribe(res => {
      if(res) {
        console.log(res);
        this.categories = res;
      }
    })
    this.option = "Create Job";
  }

  updateJob() : void {
    console.log(this.createdJob.value);
    const dialogRef = this.dialog.open(ConfirmBox, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result);
        this.http.postAddNewJob(this.email,this.createdJob.value).subscribe(res => {
          if(res) {
            this.addJob();
          }
        })
      }
    });
  }

  delete(description : string) : void {
    
  }

  onClose2(): void {
    this.option = "Job Description";
  }

  addNewAddress() : void {
    this.option = "Add New Address";
  }

  UpdateAddress() : void {
    console.log(this.newAddress.value);
    const dialogRef = this.dialog.open(ConfirmBox, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result);
        this.http.postAddNewAddress(this.email,this.newAddress.value).subscribe(res => {
          if(res) {
            this.addAddress();
          }
        })
      }
    });
  }

  onClose3() : void {
    this.option = "Address";
  }

  remove(house : string) : void {
    var data : Object;
    data = this.address.find(x => x.house == house);
    const dialogRef = this.dialog.open(ConfirmBox, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result);
        console.log(this.email,data)
        this.http.removeAddress(this.email, data).subscribe(res=> {
          if(res) {
            this.addAddress();
          }
        })
      }
    });
  }

}

@Component({
  selector: 'confirm-box',
  templateUrl: 'confirmBox.html'
})

export class ConfirmBox {
  constructor(public dialogRef: MatDialogRef<ConfirmBox>) {
  }
  goOff() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'promptBox',
  templateUrl: 'promtBox.html'
})

export class PromptBox {
  constructor(public dialogRef: MatDialogRef<PromptBox>) {
  }
  goOff() {
    this.dialogRef.close();
  }
}





