import { Component, OnInit, DoCheck } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import {Router,ActivatedRoute} from '@angular/router';  
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses;
  gotIdfromNav;
  sub;
  coList;
  constructor(private _courseService:CoursesService,private router: Router,private activatedRoute:ActivatedRoute) { 
    this.sub = this.activatedRoute.params.subscribe(params => {
      console.log(params);
     const cId = params['id'];
      this.getCoursesDataById(cId);
    });
  }



  ngOnInit() {
    // get id through activated route
  //   console.log("called");
    // this.activatedRoute.queryParams.subscribe((params)=>{
     
      // this.gotIdfromNav = params.id;
    //   let id = +params.id;
    // console.log(id);
  //      this._courseService.getCoursesDataById(this.gotIdfromNav).subscribe(ele=>this.courses=ele);  
  //      console.log(this.courses);
  //  });
 
  // this._courseService.getCoursesDataById(this.permitId).subscribe(ele=>console.log(ele)); 
  
  //  this.activatedRoute.queryParams.subscribe((params)=>console.log(params));
   
  //  this.storeData.find(res=>res.id===id);
   

  }

  public getCoursesDataById(cId: string) {
    this._courseService.getCoursesDataById(cId).subscribe(response => {
      this.coList = response;
      console.log(this.coList);
      });
    }
  // ngAfterContentInit(){
  //   this.activatedRoute.queryParams.subscribe((params)=>{
     
  //     this.gotIdfromNav = params.id;
    
  //       this._courseService.getCoursesDataById(this.gotIdfromNav).subscribe(ele=>console.log(ele)); 
  //  });
  // }
ngOnChanges(){
//   this.activatedRoute.queryParams.subscribe((params)=>{
     
//     this.gotIdfromNav = params.id;
//     this._courseService.getCoursesDataById(this.gotIdfromNav).subscribe(ele=>this.courses=ele);
//     console.log(this.courses);
//  });
}
}
