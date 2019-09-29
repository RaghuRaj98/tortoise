import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  get userdata()
  {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users`);
  }
}
