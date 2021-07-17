import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //Pagination for the customer array
  page: number = 1;

  data: any = []
  constructor( private user: UsersService) {
    this.user.getData().subscribe( data =>{
      console.log(data)
      this.data = data
    })
  }

}
