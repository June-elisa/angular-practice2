import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  // 声明接收通过属性传入的值 
  @Input() name: string|undefined;
  // input: 输入
  // @Input() 代表此变量是外部输入的
  @Input() age: number|undefined; // object 代表 {} 空对象
  @Input() boss!: Boss;

  constructor() { }

  ngOnInit(): void {
    console.log('name:',this.name)
    console.log('age:',this.age)
    console.log('boss:',this.boss)
  }

}
// 对象类型需要自己声明 // 类型名 是 大写 
interface Boss {
  name: string;
  age: number;
  phone: string;
}