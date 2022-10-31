import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
beverages={
  productcategory:"Beverage"
}
  constructor(private api:ProjectService) { }

  ngOnInit(): void {
    this.api.viewprdt(this.beverages).subscribe(
      (data)=>{
        console.log(data)
        this.data1=data
      }
    )
    
  }
  data1:any=[]
  }


