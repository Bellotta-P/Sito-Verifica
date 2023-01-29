import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  http: any;

  constructor() { }

  getData() {
    return this.http.get('https://example.com/api/data');
  }
}

ricercaVerifiche(query: string) {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  let x = this.http.get(url);
  return x;
}

searchId(query: any) {
  const url = `https://api.tvmaze.com/shows?q=${query}`;
  let obsBello2 = this.http.get(url);
  return obsBello2;
}

/* COMPONENT
Finally, you can call this method in a component and subscribe to the returned observable to handle the response:
this.myService.getData().subscribe(data => {
  console.log(data);
});

*/


/* 
Import the service in the component where you want to use it.
  import { MyService } from './my-service.service';

and inject it in the constructor
  constructor(private myService: MyService) {}
*/