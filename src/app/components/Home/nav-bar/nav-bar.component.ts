import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isCollapsed = false;

  constructor(private _service: AuthenticationService) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this._service.isLoggedIn();
  }

  getJwtClaim(claim: string): string {
    return this._service.getJwtClaim(claim);
  }

}
