import { Component } from '@angular/core';
import { Algorithm, AlgorithmCategories } from '../algorithm';

@Component({
  selector: 'app-algorithms-page',
templateUrl: './algorithms-page.component.html',
  styleUrls: ['./algorithms-page.component.css']
})
export class AlgorithmsPageComponent {

    algorithmTypes: AlgorithmCategories[] = [
      {
        type: "Path Finders",
        description: "Pathfinding algorithms are used to find the shortest or most efficient path between two points in a graph. There are various types of pathfinding algorithms, such as Dijkstra's, and Breadth-First Search, each with their own strengths and weaknesses depending on the specific use case.",
        link: "/searchingAlgorithms",
      },
      {
        type: "Sorting",
        description: "Sorting algorithms are a set of instructions that rearrange a collection of items in a specific order. They can be used to sort lists of numbers, strings, or other data types, and are used in many areas of computer science and software development.", 
        link: "/searchingAlgorithms",
      }
    ]
    


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
