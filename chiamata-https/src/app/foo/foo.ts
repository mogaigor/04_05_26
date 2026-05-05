import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foo',
  imports: [],
  templateUrl: './foo.html',
  styleUrl: './foo.css',
})

export class FooComponent {
  data!: Object; 
  loading: boolean = false;
  o!: Observable<Object>;

  constructor(public http: HttpClient) {}

  // --- METODO GET ---
  makeRequest(): void {
    console.log("Inizio richiesta GET");
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    this.o.subscribe(this.getData);
  }

  // Callback per la gestione dati
  getData = (d: Object) => {
    this.data = new Object(d);
    this.loading = false;
  }

  // --- METODO POST ---
  makePost(): void {
    this.loading = true;
    
    // A: Dichiariamo la variabile dati
    const postData = JSON.stringify({
      body: 'bar',
      title: 'foo',
      userId: 1
    });

    // B: Eseguiamo la POST senza arrow function anonima nel subscribe
    this.o = this.http.post('https://jsonplaceholder.typicode.com/posts', postData);
    this.o.subscribe(this.getData); 
  }
}