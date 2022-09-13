import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  fileName:any='';
  upload:any='';
  plots:any='';
  constructor(private router:Router,private fb:FormBuilder,
    private auth:AuthService
    ) {
  }
  goToPage(){
    this.router.navigate(['']);
  }

  url:any;
  getFile(event:any){
    var file=event.target.files[0];
    this.upload=file;
    this.fileName='&nbsp;&nbsp;&nbsp;&nbsp;'+ file.name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+(file.size/1000).toFixed(2)+'kb';
  }
  uploadFile():void{
    if(this.upload){
      this.auth.uploadFile(this.upload).subscribe(resp=>{
        alert("Uploaded")
        this.router.navigate(['result']);
      });{}
    }else{
      alert("Please select a file first");
    }
  }
}
