import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface menuDialogInput {
  menu: string[];
}
@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.css'],
})
export class MenuDialogComponent implements OnInit {
  submenu: string[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: menuDialogInput) {}
  ngOnInit(): void {
    this.submenu = this.data.menu;
  }
}
