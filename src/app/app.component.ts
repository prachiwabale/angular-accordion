import { Component } from '@angular/core';
import { Config, Menu } from './accordion/types';

@Component({
  selector: 'my-app',
  template: `
    <h1>Accordion Menu</h1>
    <accordion 
      [options]="options" 
      [menus]="menus">
    </accordion>
  `,
})
export class AppComponent {
  // signle open mode
  options: Config = { multi: false };

  menus: Menu[] = [
    {
      name: 'Front-end',
      active: false,
      submenu: [
        { name: 'HTML', url: '#' },
        { name: 'CSS', url: '#' },
        { name: 'Javascript', url: '#' },
      ],
    },
    {
      name: 'Responsive web',
      active: false,
      submenu: [
        { name: 'Tablets', url: '#' },
        { name: 'Mobiles', url: '#' },
        { name: 'Desktop', url: '#' },
      ],
    },
    {
      name: 'Web Browser',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' },
      ],
    },
  ];
}
