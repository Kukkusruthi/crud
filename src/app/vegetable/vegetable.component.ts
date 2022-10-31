import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {
vegetable={
  productcategory:"Vegetable"
}
  constructor(private api:ProjectService) { }

  ngOnInit(): void {
    this.api.viewprdt(this.vegetable).subscribe(
      (data)=>{
        console.log(data)
        this.data1=data
      }
    )
    
  }
data1:any=[] 
    
    
  }
  


