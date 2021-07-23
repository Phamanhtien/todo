import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;
  constructor(private route: ActivatedRoute) { 
    this.email = ''
    this.password = ''
  }
  ngOnInit(): void {
  }
  authenticate(email:string, password:string):void {
    console.log(email + " "+ password)
  }

}
