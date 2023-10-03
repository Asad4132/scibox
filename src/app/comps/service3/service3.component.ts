import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-service3',
  templateUrl: './service3.component.html',
  styleUrls: ['./service3.component.css']
})
@HostListener('scroll', ['$event'])
export class Service3Component implements OnInit {
  a:any;
  constructor() { }

  ngOnInit(): void {
  }
  onWindowScroll($event: any) {
    if(this.a == 'stop') {
    return;
}
this.a = 'stop';
    $('.counter-count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  
}
goToBottom(){
  window.scrollTo(0,document.body.scrollHeight-1000);
}
}