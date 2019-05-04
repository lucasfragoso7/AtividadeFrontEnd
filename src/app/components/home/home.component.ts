import { HttpServiceService } from './../../services/HttpService/http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpServiceService) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users').subscribe(resposta =>{
      console.log(resposta);
        })
  }

}
