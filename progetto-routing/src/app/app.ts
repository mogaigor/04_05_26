import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AnimalComponent } from './animal-component/animal-component';
import { FruitsComponent } from './fruits-component/fruits-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AnimalComponent,FruitsComponent,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('moga-igor');
}
