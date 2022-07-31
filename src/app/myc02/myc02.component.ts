import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc02',
  templateUrl: './myc02.component.html',
  styleUrls: ['./myc02.component.css']
})
export class Myc02Component implements OnInit {
  name = '东东';
  age = 18;
  show() {
    alert('我是 myc02 的show');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
