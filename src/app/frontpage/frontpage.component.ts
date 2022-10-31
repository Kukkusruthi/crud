import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  regdata={
    emailid:"",
    password:""
  }

  constructor(private api:ProjectService,private router:Router) { }

  ngOnInit(): void {
  }
  Clogin(){
    this.api.clogin(this. regdata).subscribe((regdata)=>{
      if(regdata.success === true){
        this.router.navigate(['/frontpage'])
      }
      else
      {
        alert(regdata.success)
      }
    })
  }

 

}