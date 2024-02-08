import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../model/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }

  login(credentials : Credentials) {
    this.http.post('https://29d2-2402-8100-39e6-a7b0-de2e-27b-bf1f-3973.ngrok-free.app/api/users' , credentials,{})
    .subscribe({
      next:(Response)=>{
        console.log(Response);
      },
      error:(errors)=>{
        console.log(errors);
      }    
    })

    console.log(credentials);}
}

