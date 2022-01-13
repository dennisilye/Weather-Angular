
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data: any = [];
  getData() {}
  ngOnInit(): void {
    // console.log('asdasdasd');
    // this.http.get('https://api.spacexdata.com/v4/launches').subscribe((res) => {
    //   console.log('hello', res);
    //   this.data = res;
    // });
  }
}

//Hh3yrpXEWODKSKE0AqfHdhtAzGZrwKaf 
