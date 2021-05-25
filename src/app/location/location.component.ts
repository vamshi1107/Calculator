import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(
  ) { }
lat
lng
  ngOnInit(): void {
    this.load()
  }

  load(){
    navigator.geolocation.getCurrentPosition(res=>{
      this.lat=res.coords.latitude;
      this.lng=res.coords.longitude
    })
  }
}
