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
  const url = `inserisciURL${query}`;
  let x = this.http.get(url);
  return x;
}

searchId(query: any) {
  const url = `inserisciURL${query}`;
  let obsRicerca = this.http.get(url);
  return obsRicerca;
}


function ricercaVerifiche(query: any, string: any) {
  throw new Error('Function not implemented.');
}

function searchId(query: any, any: any) {
  throw new Error('Function not implemented.');
}

/* COMPONENT
subscribe to the returned observable to handle the response:
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