import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regdata={
   
    email:"",
    password:""
    

  }

  constructor(private api:ProjectService, private router:Router) { }

  ngOnInit(): void {}
   signup()
  {
    console.log(this.regdata)
   this.api.Signup(this.regdata).subscribe((regdata)=>{
    alert("success");
    console.log(regdata)
    this.router.navigate(['/Frontpage'])
   })
   
  }

}