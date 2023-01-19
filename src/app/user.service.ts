import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: SocialUser
  notes: {key: string, title: string, description: string}[] = []
  edit: boolean = false
  editData: {key: string, title: string, description: string}
  
  constructor(private authService: SocialAuthService, private router: Router) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(result=>{
      console.log(result)
      this.router.navigate(['/home'])
    })
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/'])
  }
  
}
