import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fade } from './shared/animations/fade';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  animations: [fade],
  templateUrl: './app.html'
})
export class App {}
