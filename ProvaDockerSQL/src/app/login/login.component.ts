import { Component } from '@angular/core';
// importa- 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  id: string | undefined;
  nome: any;

  /*  
  Da riadattare per estrapolare informazioni
  ngOnInit(): void {
  }
  
  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obs = this.*metodo*(this.query);
    this.obs.subscribe((data: any) => {
      this.*metodo* = data;
      console.log(this.*metodo*);
    });
  }
  /*
}
