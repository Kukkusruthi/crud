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
  constructor(private ProjectService : ProjectService) { }

  ngOnInit(): void {
    this.ProjectService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.ProjectService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.ProjectService.removeCartItem(item);
  }
  emptycart(){
    this.ProjectService.removeAllCart();
  }

}