import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service'

@Component({
  selector: 'app-myc03',
  templateUrl: './myc03.component.html',
  styleUrls: ['./myc03.component.css']
})
export class Myc03Component implements OnInit {
  // 通过属性保存服务到本地
  // nameS!: NameService;

  constructor(protected nameS: NameService) {
    // this.nameS = nameS
   }

  ngOnInit(): void {
    console.log(this.nameS.names)
  }

}
