import { Component } from '@angular/core';
import { Config, Menu } from './accordion/types';

@Component({
  selector: 'my-app',
  template: `
    <h1>Accordion Menu</h1>
    <accordion 
      [options]="options" 
      [menus]="menus">
      <ng-content></ng-content>
    </accordion>.

  `,
})
export class AppComponent {
  // signle open mode
  options: Config = { multi: false };

  menus: Menu[] = [
    {
      name: 'Getting Started',
      active: false,
      submenu: [
        {
          question:
            'What is the criteria to be eligible for Monthly Recurring Auto Draft?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          question: 'What is an authorized user?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe.',
        },
        {
          question: 'What is online billing?',
          answer:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
      ],
    },
    {
      name: 'Participent',
      active: false,
      submenu: [
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
      ],
    },

    {
      name: 'Invoices',
      active: false,
      submenu: [
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
      ],
    },

    {
      name: 'Accounts',
      active: false,
      submenu: [
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
      ],
    },
    {
      name: 'Administration Guide',
      active: false,
      submenu: [
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
      ],
    },
  ];
}
