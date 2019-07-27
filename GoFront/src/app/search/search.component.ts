import { Component, OnInit, Inject, inject } from '@angular/core';
import { Data } from '../schema/data';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories = [];
  selectedCategory: string;
  results = [];
  check: boolean = false;

  constructor(private schema: Data, private dialog: MatDialog) {
    this.categories;
  }

  ngOnInit() {
  }

  goSearch() {
    this.results.length = 0;
    // this.schema.labours.forEach(result => {
    //   if (this.selectedCategory == result.skill) {
    //     this.results.push(result);
    //   }
    // });
    this.check = true;
    console.log(this.results, this.check);
  }

  openView(i: number) {
    console.log(i);
    this.dialog.open(ViewDialog, {
      width: '50%',
      data: {
        key: this.results[i],
      }
    });
  }

  goNotify(i : number) {
    let user;
    this.schema.users.forEach(result => {
      if (sessionStorage.getItem('email') == result.email) {
        user = result;
      }
    });
    console.log(user);
    this.dialog.open(NotifyDialog, {
        data : {
          key : user,
          email : this.results[i].email
        }
    });
  }

}

@Component({
  selector: 'view-dialog',
  templateUrl: 'view-dialog.html',
})

export class ViewDialog {
  name: string;
  email: string;
  mobile: number;
  aadhaar: number;
  skill: string;
  work: string;
  price: number;

  constructor(
    public dialogRef: MatDialogRef<ViewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private schema : Data) {
    console.log(data.key);
    this.aadhaar = data.key.aadhaar;
    this.skill = data.key.skill;
    this.email = data.key.email;
    this.mobile = data.key.mobile;
    this.name = data.key.name;
    this.work = data.key.work;
    this.price = data.key.price;
  }

  goNotify() {
    let user;
    this.schema.users.forEach(result => {
      if (sessionStorage.getItem('email') == result.email) {
        user = result;
      }
    });
    this.dialog.open(NotifyDialog, {
      data : {
        key : user,
        email: this.email,
      }
    });
    this.onClick();
  }

  onClick() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'notify-dialog',
  templateUrl: 'notify-dialog.html',
})

export class NotifyDialog {

  constructor(
    public dialogRef: MatDialogRef<NotifyDialog>, @Inject(MAT_DIALOG_DATA) private data : any, private schema : Data
  ) {
      // let check = this.schema.updateNotify(data.key, data.email);
      // console.log(check);
   }

  close() {
    this.dialogRef.close();
  }
}