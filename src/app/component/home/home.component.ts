import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/user.service';
import validator from 'validator'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string = ""
  valid_url: boolean = false
  content: object = {}

  constructor(private http: HttpClient, protected userService: UsersService) { }

  url_live(){
    if(this.url.length === 0 || validator.isURL(this.url))
      this.valid_url = false
    else
      this.valid_url = true
  }

  shortenUrl(){
    console.log(this.content)
    console.log(this.url, validator.isURL(this.url))
    if(validator.isURL(this.url)){
      const url: string = 'https://api.shrtco.de/v2/shorten?url=' + this.url
      this.http.get(url).subscribe(content=>{
        // console.log(content)
        console.log(content['result'])
        this.content = content['result']
      })
    }
    else
      this.valid_url = true
  }

  goToLink(url: string){
    window.open(url)
  }

  ngOnInit(): void {
    this.valid_url = false
  }

}
