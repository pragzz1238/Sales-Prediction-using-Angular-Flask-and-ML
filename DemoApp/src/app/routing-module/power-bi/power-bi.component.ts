import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PowerBIEmbedModule } from 'powerbi-client-angular';

@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.css']
})
export class PowerBIComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
