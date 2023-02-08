import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/user.service';

@Component({
  selector: 'app-shortenedurls',
  templateUrl: './shortenedurls.component.html',
  styleUrls: ['./shortenedurls.component.css']
})
export class ShortenedurlsComponent implements OnInit {

  constructor(protected userService: UsersService) { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url)
  }

}
