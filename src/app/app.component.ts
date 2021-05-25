import { WriteKeyExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    localStorage.clear()
    localStorage.setItem("tot","");
    document.body.style.backgroundColor="black"
  }
  title = 'skill';
  result="";
  scam=false;
  hist;
  cal(val) 
  { 
    if(this.scam){
      
      this.result=""
    }
      this.result+=val 
      this.scam=false;

  } 
  sol(val){
    if(this.scam){
      
      this.scam=false
    }
         this.result+=val
 }
 
  clear(){  
    this.result=""
  }
  solve() 
  { 
    
      localStorage.setItem("tot",localStorage.getItem("tot")+"\n"+this.result+" = "+eval(this.result)+"  ,  ")
      this.scam=true;
      this.result = eval(this.result) 
      
  } 
  history()
  {
     this.hist=localStorage.getItem("tot")
  }
  locate(){
    navigator.geolocation.getCurrentPosition(pos=>{
      console.log(pos.coords.latitude,pos.coords.longitude)
    })
  }
}
