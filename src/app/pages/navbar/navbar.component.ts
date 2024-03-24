import { Component, signal } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OverlayModule, FontAwesomeModule, RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = signal(false);
  faBell = faBell;
  faInfoCircle = faInfoCircle;
}
