import { Component } from '@angular/core';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { AlgorithmsPageComponent } from '../app/algorithms-page/algorithms-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Algorithms and Machine Learning visualizer';
}
