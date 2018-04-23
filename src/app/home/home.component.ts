import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  garment = {
    img: "assets/images/garment.jpg",
    description: "La mejor prenda de todos los tiempos"
  }

  promotion = {
    img: "assets/images/promotion.png",
    description: "Descuento en todas nuestras prendas"
  }

  leader = {
    img: "assets/images/leader.jpg",
    description: "Conoce nuestro lider"
  }

  constructor() { }

  ngOnInit() {
  }

}
