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

  constructor(){
     setTimeout(() => {
      this.allowNewServer = true
    },2000)
  }

  show(){
    alert('This button clicked !')
  }

  onInput(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
