import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  cartCount: number = 0;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private commService: CommunicationService
  ) {
    this.authService.getLoggedIn().subscribe((loggedIn: boolean) => {
      this.loggedIn = loggedIn;
    });
  }

  ngOnInit(): void {
    this.commService.getCartCount().subscribe((count) => {
      this.cartCount = count;
    });
  }

  logOut(): void {
    this.router.navigate(['login']);
    this.authService.logout().subscribe();
    this.authService.setLoggedIn(false);
  }
}
