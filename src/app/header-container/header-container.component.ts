import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [HeaderComponent, NavComponent],
  templateUrl: './header-container.component.html',
  styleUrl: './header-container.component.css'
})
export class HeaderContainerComponent {

}
