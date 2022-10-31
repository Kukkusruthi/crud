import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
admin={
  username:"",
  password:""
}
  constructor(private api:ProjectService) { }

  ngOnInit(): void {}
   adminlogin()
  {
    console.log(this.admin)
   this.api.Adminlogin(this.admin).subscribe((admin)=>{
    alert("success");
   })
   
  }
}