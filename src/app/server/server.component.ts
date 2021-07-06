import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {

serverId :number = 10;
severStatus: string = 'ofline';

constructor(){
  this.severStatus = Math.random() > 0.5 ? 'online' : 'ofline';
}

getServerStatus(){
  return this.severStatus;
}

getColor(){
  return this.severStatus === "online" ? 'green' : 'red';
}
}
