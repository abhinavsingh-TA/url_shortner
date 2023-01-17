import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import validator from 'validator'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string = ""
  valid_url: boolean = false

  constructor(private http: HttpClient) { }

  url_live(){
    if(this.url.length === 0 || validator.isURL(this.url))
      this.valid_url = false
    else
      this.valid_url = true
  }

  shortenUrl(){
    console.log(this.url, validator.isURL(this.url))
    if(validator.isURL(this.url)){
      const url: string = 'https://api.shrtco.de/v2/shorten?url=' + this.url
      this.http.get(url).subscribe(content=>{
        console.log(content)
        // console.log(content['result'])
      })
    }
    else
      this.valid_url = true
  }

  ngOnInit(): void {
    this.valid_url = false
  }

}
