import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usd: any [] = [];
  constructor(private userdata: UsersService) { }

  ngOnInit() {

    this.userdata.userdata.subscribe(ud => {this.usd = ud; } );
  }

}
