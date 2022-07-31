import { Component, OnInit, ViewChild } from '@angular/core';
import { Myc02Component } from '../myc02/myc02.component'
@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrls: ['./myc01.component.css']
})
export class Myc01Component implements OnInit {
  @ViewChild('abc') abc!: Myc02Component;
  // 固定写法: @ViewChild('id') xxx;
  // 查询到 #id 的组件 关联到 xxx 变量上

  nextYear() {
    console.log(this.abc);
    this.abc.age++;
    this.abc.show();
}

  clockComplete(msg: undefined) {
    console.log(msg);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
