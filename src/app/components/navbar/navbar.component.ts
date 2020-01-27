import { Component, OnInit ,Output, EventEmitter, OnDestroy} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';  
import { CoursesService } from 'src/app/services/courses.service';
import { PLATFORM_ID , Inject} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public _opened: boolean = false;
  componentActive = true;
  courseData;
  storeData;
  myData;
  parentCourseName;
  isCollapse:boolean = false;
  showpopup = true;
  public platformId;
  public screen = "";

  @Output() sidenavClose = new EventEmitter();
  constructor(private router: Router,private navService:CoursesService,private activatedRoute:ActivatedRoute,
    @Inject(PLATFORM_ID) platformId: string,) {
      this.platformId = platformId;
    // this.storeData = data.course;
    // this.myData = this.storeData.map(res=>res);
   }

  ngOnInit() {
    // this.courseDetailsService.getData().subscribe((res)=>console.log(res.menu.map(res=>res.parentCourseName)));

    this.navService.getNavData().subscribe((res)=>{
      this.courseData=res.menu;
      // this.regular=this.courseData.map(res=>res.regular.title);
      this.parentCourseName=this.courseData.map(ele=>ele.parentCourseName);
      // this.master=this.courseData.map(ele=>ele.master);
    });
    
    // console.log(this.courseData.menu);
    // console.log(this.courseData.forEach(element => {
    //   element
    // }))
    this.initmethod();
  }

  public _toggleOpened(): void {
    this._opened = !this._opened;
  }

  initmethod() {
    debugger;
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth < 900) {
        this.screen = "mobile";
      } else {
        this.screen = "web";
      }
    }
  }

  // by me
  nohideTogg(event) {
    event.stopPropagation();
 }

  targetMenu = 0
  toggleMeu(i) {
    this.targetMenu = i;
  }
  onNavToggle(){
    this.isCollapse = !this.isCollapse;
  }
  onClink(id){
    console.log(id);
    let X
    let x = this.storeData.find(res=>res.id===id);
    // this.router.navigate(["/courses/id"],{queryParams:x})
  }

  // message: string = "Hola Mundo!"

  // @Output() messageEvent = new EventEmitter<string>();

  // constructor() { }

  // sendMessage() {
  //   this.messageEvent.emit(this.message)
  // }

  ngOnDestroy() {
    this.componentActive = false;
  }
  navigate(val){
    let id = val;
    console.log(id);
    this.router.navigate(['./courses', id])
    // ,{
    //   queryParams:{id:JSON.stringify(id)}
    // })
  }
}
