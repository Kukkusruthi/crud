import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  pdata:any=[]

  constructor(private http:HttpClient,private router:Router) { }

  Login(loginpg:any){
    return this.http.post<any>("http://localhost:4000/login",loginpg)
  }
  Createprdt(datas:any){
    return this.http.post<any>('http://localhost:4000/create',datas)
  }
  viewproduct(){
    return this.http.get("http://localhost:4000/viewProduct")
  }
  deleteproduct=(id:any)=>{
    return this.http.delete<any>("http://localhost:4000/delete/"+id)
}
updateproduct=(i:any)=>{
  return this.http.put<any>("http://localhost:4000/update/"+i._id,i)
}
viewprdt(datas:any){
  return this.http.post<any>('http://localhost:4000/viewprdt',datas)
}
Signup(regdata:any){
  return this.http.post<any>('http://localhost:4000/signup',regdata)
}
clogin(t3:any){
  return this.http.post<any>('http://localhost:4000/Frontpage',t3)
}
Adminlogin(admin:any){
  return this.http.post<any>('http://localhost:4000/adminlogin',admin)
}

saveproduct(i:any){
   this.pdata = i
}
receiveproduct(){
  return this.pdata
}

getProducts(){
  return this.productList.asObservable();
}

setProduct(product : any){
  this.cartItemList.push(...product);
  this.productList.next(product);
}
addtoCart(product : any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.getTotalPrice();
  console.log(this.cartItemList)
}
getTotalPrice() : number{
  let grandTotal = 0;
  this.cartItemList.map((a:any)=>{
    grandTotal += a.total;
  })
  return grandTotal;
}
removeCartItem(product: any){
  this.cartItemList.map((a:any, index:any)=>{
    if(product.id=== a.id){
      this.cartItemList.splice(index,1);
    }
  })
  this.productList.next(this.cartItemList);
}
removeAllCart(){
  this.cartItemList = []
  this.productList.next(this.cartItemList);
}

}


