import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'easybank-landing-page';
  isMobileView!: boolean;
  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('innerWidth : ', window.innerWidth);
    console.log('outerwidth : ', window.outerWidth);
    if (window.innerWidth < 678 || window.outerWidth < 678) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }
  ngOnInit(): void {
    this.onResize();
  }
}
