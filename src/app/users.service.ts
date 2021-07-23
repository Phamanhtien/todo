import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users} from './users';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private api_url = 'api/User_list'
  constructor(private http: HttpClient {
    
  }) {

   }
  
   is_existing_user(email:string):Observable<Users>{
      const user_url: string = `${this.api_url}/${email}`
      return this.http.get<Users>(user_url)
   }
  // find_user():Users{
  //   user = User_list.find(x => x.email =)
  // }
  // user_authenticate(email:string, password:string):Observable<Users>{
    
  // }
}
