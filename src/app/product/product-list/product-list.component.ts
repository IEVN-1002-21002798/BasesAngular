import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productos:any[]=[
    {
      "prodictoID" :1,
      "Modelo ": "Senta",
      "Descripcion " : "4 Puertas",
      "Precio " : 20000,
      "Year" : 2023,
      "Marca" : "Nissan",
      "Color" : "Azul",
      "ImagenUrl" : ""
    },
    {
      "prodictoID" :2,
      "Modelo ": "Fiesta",
      "Descripcion " : "5 Puertas",
      "Precio " : 34500,
      "Year" : 2022,
      "Marca" : "KIA",
      "Color" : "Rojo",
      "ImagenUrl" : ""
    },
    {
      "prodictoID" :3,
      "Modelo ": "Rubicon",
      "Descripcion " : "5 Puertas",
      "Precio " : 2000000,
      "Year" : 2025,
      "Marca" : "JEEP",
      "Color" : "Negra",
      "ImagenUrl" : ""
    }
  ]


}
