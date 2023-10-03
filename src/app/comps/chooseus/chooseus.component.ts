import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chooseus',
  templateUrl: './chooseus.component.html',
  styleUrls: ['./chooseus.component.css']
})
export class ChooseusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight-1000);
  }
}
