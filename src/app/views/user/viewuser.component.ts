import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{ Router } from '@angular/router';
import {ChangeDetectorRef } from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'view-user',
  templateUrl: './viewuser.component.html'
})
export class ViewUserComponent implements OnInit {



  
  constructor(private router:Router,public dialog: MatDialog,private cdref: ChangeDetectorRef) { }


  ngOnInit() {
    

  }
}
 