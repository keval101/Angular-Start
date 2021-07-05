import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent{

  name = 'Angular';
  userName = '';
  allowNewServer = false;
  uName = '';

  constructor(){
     setTimeout(() => {
      this.allowNewServer = true
    },2000)
  }

  show(){
    alert('This button clicked !');
    this.uName = this.userName;
  }

  onInput(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
