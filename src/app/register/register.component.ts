import { Component, Input, OnInit } from '@angular/core';
import { Users} from '../users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  full_name: string = '';
  phone: number = 0;
  email: string = '';
  sex: Boolean = true;
  date_of_birth: Date = new Date();
  password:string = '';
  repassword:string = '';

  is_match_password: string = ''
  // constructor(private user: Users) { }

  ngOnInit(): void {
  }
  register():void{
    if (this.password !== this.repassword){
      this.is_match_password = 'Mật khẩu không trùng khớp'
    }
    // this.user.id = 1
    // this.user.full_name = this.full_name,
    // this.user.email = this.email,
    // this.user.date_of_birth = this.date_of_birth
  }

}
