import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  goToPage(){
    this.router.navigate(['']);
  }

}
