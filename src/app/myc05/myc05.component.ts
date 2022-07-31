import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css']
})
export class Myc05Component implements OnInit {
  picUrl:undefined|string

  constructor(public http:HttpClient) {
   }

  loadProduct(){
    let url = 'https://dog.ceo/api/breeds/image/random'
    this.http.get<Result>(url).subscribe((res) => {
      console.log('res:',res)
        this.picUrl = res.message
    })

  }  
 
  ngOnInit(): void {
    
  }

}

interface Result {
  message: string,
  status: string
}