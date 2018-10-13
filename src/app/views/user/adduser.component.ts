import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{ Router } from '@angular/router';
import {ChangeDetectorRef } from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class AddUserComponent implements OnInit {
  animal: string;
  name: string;
dialogRef;

  constructor(private router:Router,public dialog: MatDialog,private cdref: ChangeDetectorRef) { 


    
  }
  ngOnDestroy(){
    this.dialogRef.close();
  }

  ngOnInit() {
    
    setTimeout(() => this.dialogRef = this.dialog.open(AddUser, {
      width: '500px',
      height:'500px',
      disableClose:true,
      data: {name: this.name, animal: this.animal}
    }));
   
}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddUser, {
        disableClose:true,
      width: '500px',
      height:'500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'adduser.html',
  styleUrls: ['./adduser.component.scss']
})
export class AddUser {

  constructor(private router:Router,
    public dialogRef: MatDialogRef<AddUser>, @Inject(MAT_DIALOG_DATA) public data: DialogData ){}

  save(): void {
      this.dialogRef.close();
    this.router.navigate(['user/viewuser']);
   
  }
  close()
  {
      this.dialogRef.close();
      this.router.navigate(['user/viewuser']);
  }

}