import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService ) { }

  ngOnInit() {
  }
  goToHome()
  {
  this.router.navigate(['home']); 
  }
  logout()
  {
    this.auth.logout();
  }

}

