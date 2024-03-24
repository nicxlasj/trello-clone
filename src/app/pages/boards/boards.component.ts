import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello, faEmpire } from '@fortawesome/free-brands-svg-icons'
import { faClock, faHome, faHeart, faUsers, faGear, faPlus, faBorderAll } from '@fortawesome/free-solid-svg-icons'
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule, RouterModule],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faTrello = faTrello;
  faEmpire = faEmpire;
  faHome = faHome;
  faClock = faClock;
  faHeart = faHeart;
  faUsers = faUsers;
  faGear = faGear;
  faPlus = faPlus;
  faBorderAll = faBorderAll;

}
