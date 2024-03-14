import { Component, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {
  MenuDialogComponent,
  menuDialogInput,
} from './menu-dialog/menu-dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() mobileView!: boolean;
  iconHamburger = '../../assets/icon-hamburger.svg';
  iconClose = '../../assets/icon-close.svg';
  icon!: string;
  Label = {
    btn: 'Request Invite',
  };
  menu!: boolean;
  submenu: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.icon = this.iconHamburger;
  }
  onClickMobileMenu = () => {
    this.iconHandle();
    if (this.menu) {
      const menuInput: menuDialogInput = { menu: this.submenu };
      this.dialog
        .open(MenuDialogComponent, {
          data: menuInput,
          backdropClass: 'custom-backdrop',
          position: {
            top: '23%',
            left: '6%',
          },
          width: '88%',
          maxWidth: '90vw',
        })
        .afterClosed()
        .subscribe((res) => this.iconHandle());
    }
  };
  iconHandle = () => {
    this.menu = !this.menu;
    this.icon = this.menu ? this.iconClose : this.iconHamburger;
  };
}
