import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {UserServiceService} from './user-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notices';
  dados:any;

  constructor(private user:UserServiceService){

    this.user.getData().subscribe(data =>{
      console.warn(data)
      this.dados = data
    })
  }
}
