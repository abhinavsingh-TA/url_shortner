import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected userService: UsersService) { }

  ngOnInit(): void {
  }

}
