import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/user.service';

@Component({
  selector: 'app-shortenedurls',
  templateUrl: './shortenedurls.component.html',
  styleUrls: ['./shortenedurls.component.css']
})
export class ShortenedurlsComponent implements OnInit {

  constructor(protected userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if(!this.userService.user)
        this.router.navigate(['/'])
  }

  goToLink(url: string){
    window.open(url)
  }

}
