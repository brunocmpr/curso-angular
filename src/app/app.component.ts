import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos:any[] = [];

  constructor(http: HttpClient) {
    const observable = http.get<any[]>('http://localhost:3000/flavio/photos');
    observable.subscribe(
      photos => this.photos=photos,
      error => console.log(error.message)
    );
  }
  
}
