import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  Label = {
    btn: 'Request Invite',
  };
  submenu: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];
}
