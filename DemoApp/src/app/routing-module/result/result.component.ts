import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{

  constructor(private router:Router,private fb:FormBuilder,
    private auth:AuthService, private http:HttpClient,private httpbackend:HttpBackend) { }

    
    private url="http://127.0.0.1:5000/api/file-upload";

    goToPage(){
      this.router.navigate(['']);
    }
  getResponse(){
    this.http.get(this.url).subscribe(
      
    );
  }
}
