import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';

import {catchError} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
 // url:string='http://192.168.0.14:8080/serverdataupload/menu-items';
 getDataByIdUrl:string = "http://54.87.213.87:8080/serverdataupload/course";

//  url:string='../../assets/data.json';
 navUrl:string='../../assets/navbar.json';
 courseDetails:any;
 data;
 constructor(private http:HttpClient) {
  
  }
 getCoursesDataById(id):Observable<any>{
   return this.http.get<any[]>(this.getDataByIdUrl+'/'+id);
 }
 getData():Observable<any>{
   return this.http.get<any>(this.getDataByIdUrl);
 }
 getNavData():Observable<any>{
   return this.http.get<any>(this.navUrl);
 }
}
