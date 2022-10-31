import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  rdata:any=[]

  constructor(private api:ProjectService,
    private route:Router ) {
    this.rdata = this.api.receiveproduct()
    console.log(this.rdata)
    if(this.rdata){
     this.product = this.rdata
     console.log(this.product)
    }
   }

  ngOnInit(): void {
  }

  Updateproduct(i:any){
    
    console.log()
    this.api.updateproduct(i).subscribe(
      (data)=>{
        console.log(data)
        this.route.navigate(['/inventoryview'])
      } )
    


  }

  product:any=[]

}
