import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-instantfood',
  templateUrl: './instantfood.component.html',
  styleUrls: ['./instantfood.component.css']
})
export class InstantfoodComponent implements OnInit {
instantfood={
  productcategory:"Instant Food"
}
  constructor(private api:ProjectService) { }

  ngOnInit(): void {
    this.api.viewprdt(this.instantfood).subscribe(
      (data)=>{
        console.log(data)
        this.data1=data
      }
    )
    
  }
data1:any=[]
}