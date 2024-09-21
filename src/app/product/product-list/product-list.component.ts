import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productos:any[]=[
    {
      "productoID" :1,
      "Modelo ": "Senta",
      "Descripcion " : "4 Puertas",
      "Precio " : 20000,
      "Year" : 2023,
      "Marca" : "Nissan",
      "Color" : "Azul",
      "ImagenUrl" : "https://www.greeleynissan.com/blogs/1612/wp-content/uploads/2022/01/2022-nissan-sentra-midnight-edition-front-3-4-1536x864.jpg"
    },
    {
      "productoID" :2,
      "Modelo ": "Forte",
      "Descripcion " : "5 Puertas",
      "Precio " : 34500,
      "Year" : 2022,
      "Marca" : "KIA",
      "Color" : "Rojo",
      "ImagenUrl" : "https://hips.hearstapps.com/hmg-prod/images/2022-kia-forte-gt-101-1633972551.jpg?crop=0.635xw:0.477xh;0.261xw,0.345xh&resize=1200:*"
    },
    {
      "productoID" :3,
      "Modelo ": "Rubicon",
      "Descripcion " : "5 Puertas",
      "Precio " : 2000000,
      "Year" : 2025,
      "Marca" : "JEEP",
      "Color" : "Negra",
      "ImagenUrl" : "https://th.bing.com/th/id/R.772ab91657b85f12832b0f8f599c87a6?rik=P3kkuer9IL6IrA&pid=ImgRaw&r=0"
    }
  ]
//this.productos.length

}
