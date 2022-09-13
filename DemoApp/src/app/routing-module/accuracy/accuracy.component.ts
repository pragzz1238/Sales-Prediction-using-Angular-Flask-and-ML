import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accuracy',
  templateUrl: './accuracy.component.html',
  styleUrls: ['./accuracy.component.css']
})
export class AccuracyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToPage(){
    this.router.navigate(['']);
  }
}
