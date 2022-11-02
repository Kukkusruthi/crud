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
    console.log(this.regdata)
    this.api.clogin(this. regdata).subscribe((regdata)=>{
      console.log(regdata)
      if(regdata.success === true){
        console.log(regdata)
        this.api.saveUser(regdata.regdata)
        this.router.navigate(['/Homepage'])
      }
      else
      {
        alert(regdata.success)
      }
    })
  }

 

}