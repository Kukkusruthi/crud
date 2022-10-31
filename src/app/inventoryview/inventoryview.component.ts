import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-inventoryview',
  templateUrl: './inventoryview.component.html',
  styleUrls: ['./inventoryview.component.css']
})
export class InventoryviewComponent implements OnInit {

  constructor(private api:ProjectService,
    private route:Router) { 
    api.viewproduct().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }
  onEdit(item:any) {
    item.isEdit = true
  }


  Deleteproduct(datas:any){
    this.api.deleteproduct(datas._id).subscribe(
      (data)=>{
         console.log(data);
         this.data = this.data.filter((u:any)=>u!==datas)
      }
    )
 
  }
  
  updateproduct(i:any){
    
    console.log(i)
    this.api.saveproduct(i)
    this.route.navigate(['/update'])
   

  }

  data:any=[]

}
