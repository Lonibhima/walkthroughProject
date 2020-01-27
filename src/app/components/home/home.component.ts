import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormDataService } from 'src/app/services/form-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('modelPopup',{static: false}) modelPopup: ElementRef;
  clients = ['../../../assets/images/clients/01.png', '../../../assets/images/clients/02.png', '../../../assets/images/clients/03.png',
    '../../../assets/images/clients/04.png', '../../../assets/images/clients/05.png', '../../../assets/images/clients/06.png'
  ];
  constructor(private formDataService:FormDataService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(f?:NgForm){
    if(f!=null)
    f.resetForm();
    this.formDataService.formData = {
      name:'',
      phone:'',
     email:'',
     msg:''
    }
  }
  onSubmit(f:NgForm){
    if(f.valid){
     this.insertRecord(f);  
    // jQuery("#exampleModalCenter").modal("hide");
    this.modelPopup.nativeElement.display = "none";
    }
  }
  insertRecord(f:NgForm){
    this.formDataService.postUser(f.value).subscribe(res=>{
      this.resetForm(f);
    })
  }
}
