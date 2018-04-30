import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { AuthService } from './../auth.service';
import firebase from '../../environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public users: Array<any>;

  constructor(
    private auth: AuthService,
    private db: AngularFireDatabase,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    const ref = this.db.list('users');
    ref.snapshotChanges().subscribe(item => {
      this.users = [];
      item.forEach(element => {
        const y: any = element.payload.toJSON();
        y['$key'] = element.key;
        this.users.push(y);
      });
    });

  }

  newUser(): void {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '250px',
      data: { name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        // save user details
        this.auth.signup(result.email, result.password);
      }
    });
  }
}



@Component({
  selector: 'app-new-user',
  template: `
  <h2 mat-dialog-title>New User</h2>
  <mat-dialog-content>
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <input matInput name="email" placeholder="Email address" [(ngModel)]="newUser.email">
      </mat-form-field>

      <mat-form-field class="example-full-width">
        <input type="password" matInput name="password" placeholder="Password" [(ngModel)]="newUser.password">
      </mat-form-field>
    </form>
  </mat-dialog-content>

  <mat-dialog-actions>
      <button class="mat-raised-button" (click)="onNoClick()">Close</button>
      <button class="mat-raised-button mat-primary" [disabled]="!isValid()" (click)="onSaveClick()">Save</button>
  </mat-dialog-actions>
  `,
})
export class NewUserDialogComponent {
  public newUser;
  constructor(
    public dialogRef: MatDialogRef<NewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newUser = {
      email: '',
      password: ''
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.dialogRef.close(this.newUser);
  }

  isValid() {
    return (this.newUser.email !== '' && this.newUser.password !== '');
  }
}
