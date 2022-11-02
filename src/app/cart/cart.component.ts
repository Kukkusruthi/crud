import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  log:any=[]
  constructor(private ProjectService : ProjectService) { 
    this.log=this.ProjectService.getUser()
    if(this.log){
      console.log(this.log)
      
    }
    

    this.ProjectService.getProducts(this.log)
    .subscribe((res)=>{
      console.log(res)
      this.data=res
    })
  }
  
  ngOnInit(): void {
    
  }
  removeItem(item: any){
    this.ProjectService.removeproduct(item._id).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      }
    )
  }
  emptycart(){
    this.ProjectService.removeAllCart();
  }
  data:any=[]
  
}