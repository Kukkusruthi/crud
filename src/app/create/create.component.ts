import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  datas={
    productid:"",
    productname:"",
    productcategory:"",
    productquantity:"",
    productprice:"",
    productimage:""
  }

  constructor(private api:ProjectService) { }

  ngOnInit(): void {
  }
  createprdt()
  {
    console.log(this.datas)
    this.api.Createprdt(this.datas).subscribe((data)=>{
       
        console.log(data)
  
    })

    
    alert("product created")
  }

}
