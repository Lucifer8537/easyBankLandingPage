import { Component } from '@angular/core';
interface feature {
  imgSrc: string;
  title: string;
  context: string;
}
@Component({
  selector: 'app-mobile-bg',
  templateUrl: './mobile-bg.component.html',
  styleUrls: ['./mobile-bg.component.css'],
})
export class MobileBgComponent {
  title = 'Next generation digital banking';
  context =
    'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.';
  btnLabel = 'Request Invite';
  featureList: feature[] = [
    {
      imgSrc: '../../assets/icon-online.svg',
      title: 'Online Banking',
      context:
        'Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.',
    },
    {
      imgSrc: '../../assets/icon-budgeting.svg',
      title: 'Simple Budgeting',
      context:
        "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    {
      imgSrc: '../../assets/icon-onboarding.svg',
      title: 'Fast Onboarding',
      context:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      imgSrc: '../../assets/icon-api.svg',
      title: 'OpenAPI',
      context:
        'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    },
  ];
}
