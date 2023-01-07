import { Component } from '@angular/core';
import { Algorithm } from '../algorithm';

@Component({
  selector: 'app-algorithms-page',
templateUrl: './algorithms-page.component.html',
  styleUrls: ['./algorithms-page.component.css']
})
export class AlgorithmsPageComponent {

    algorithms: Algorithm[] = [{
      name: "Dijkstra's Algorithm",
      description: "Path finder",
      tags: ["Paths", "Weights"]
    }, 
    {
      name: "Bellman-Ford",
      description: "Path finder that works with negative edges",
      tags: ["Paths", "Weights"]
    }]

}
