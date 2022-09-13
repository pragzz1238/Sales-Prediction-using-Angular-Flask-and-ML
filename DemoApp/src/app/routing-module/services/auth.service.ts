import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  private url="http://127.0.0.1:5000/api/file-upload";
  uploadFile(upload:File){
   let url="http://127.0.0.1:5000/api/file-upload";
   let fdata=new FormData();
   fdata.append('file',upload)
   return this.http.post(url,fdata)
  }
  getResponse(){
    return this.http.get(this.url);
  }
 
}
