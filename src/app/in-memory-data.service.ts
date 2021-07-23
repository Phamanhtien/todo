import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const User_list = [
      {
        id: 1,
        name: "Phạm Anh Tiến",
        price: 353858859,
        email: 'tienmyduc@gmail.com',
        sex: false,
        date_of_birth: new Date(21,4,1999),
        home_number: 'vhgps3001',
        street: 'Nguyễn Xiển',
        wards: 'Long Thạch Mỹ',
        district: 'Q9',
        city:"Hồ Chí Minh",
        password: 123
      },
    ];
    return User_list
  }
  constructor() { }
}
