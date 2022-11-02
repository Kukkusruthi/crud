import { APP_ID, Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  fruit={
    productcategory:"Fruit"
  }
  constructor(private api:ProjectService) { }
  log:any=[]
  ngOnInit(): void {
    this.log=this.api.getUser()
    if(this.log){
      console.log(this.log)
      
    }
    this.api.viewprdt(this.fruit).subscribe(
      (data)=>{
        console.log(data)
        this.data1=data
      }
    )
    
  }

  addcart(i:any)
  {
    i.email=this.log.email
    console.log(i)
    this.api.Addcart(i).subscribe((data)=>{
       
        console.log(data)
  
    })

    
   
  }
data1:any=[]
}
