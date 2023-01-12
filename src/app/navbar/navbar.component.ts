import { Component, Renderer2, ElementRef } from '@angular/core';
import { AlgorithmsPageComponent } from '../algorithms-page/algorithms-page.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(private renderer: Renderer2, private el: ElementRef) {}


}
