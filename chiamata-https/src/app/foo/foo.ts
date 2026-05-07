import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foo',
  imports: [JsonPipe],
  templateUrl: './foo.html',
  styleUrl: './foo.css',
})

export class FooComponent {
  data: Object; 
  loading: boolean = false;
  o!: Observable<Object>;

  constructor(public http: HttpClient, private cdr: ChangeDetectorRef) {
    this.data = {userId: 1};
  }

  // --- METODO GET ---
  makeRequest(): void {
    console.log("Inizio richiesta GET");
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    this.o.subscribe(this.getData);
  }

  // Callback per la gestione dati
  getData = (d: Object) => {
    console.log("Dati ricevuti:", d);
    this.data = d;
    this.loading = false;
    this.cdr.detectChanges(); //Ti forzo a controllare se ci sono cambiamenti da fare al DOM, in questo caso per aggiornare la variabile data e loading
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