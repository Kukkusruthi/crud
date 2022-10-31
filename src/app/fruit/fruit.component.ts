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

  ngOnInit(): void {
    this.api.viewprdt(this.fruit).subscribe(
      (data)=>{
        console.log(data)
        this.data1=data
      }
    )
    
  }
data1:any=[]
}
