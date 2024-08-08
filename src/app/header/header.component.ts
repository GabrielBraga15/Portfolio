import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  links = [
    { label: 'About Me', url: '/about' },
    { label: 'Projects', url: '/projects' }
  ];
}