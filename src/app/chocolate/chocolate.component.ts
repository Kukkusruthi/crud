import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.css']
})
export class ChocolateComponent implements OnInit {
  chocolate={
    productcategory:"Chocolate"
  }

  constructor(private api:ProjectService) { }

  ngOnInit(): void {
    this.api.viewprdt(this.chocolate).subscribe(
      (data)=>{
        console.log(data)
        this.data1=data
      }
    )
    
  }
data1:any=[]
}