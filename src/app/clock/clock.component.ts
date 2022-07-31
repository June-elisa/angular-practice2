import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  // 声明专门接收外部传入函数的 属性
  // output: 向外输出
  @Output() msgEvent = new EventEmitter();

  @Input() duration!: number;
  timer: any;

  doStart() {
    if (this.timer) return;
    this.timer = setInterval(() => {
      this.duration--;

      if (this.duration == 0) { //关闭定时器 clearInterval(this.timer);
        // 通过 msgEvent中 存储的 父组件传入的方法 来传递消息
        this.msgEvent.emit('倒计时结束!');
        clearInterval(this.timer)
      }
    }, 1000);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
