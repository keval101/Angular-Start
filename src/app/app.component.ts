import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'TestServer', content: 'Just test sever'}];

  onAddServer(serverData :{ serverName: string, serverContent: string}){ //data from serverCreated stored value
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
  }

  onAddBlueprint(blueprintData:{ serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    })
  }

  onDelete(){
    this.serverElements.splice(0,1);
  }
  
  onChange(){
    this.serverElements[0].name = 'Changed';
  }



  //assisgment-2
  
  oddNumber: number[] = [];
  evenNumber: number[] = [];

  onIntervalFired(fireNumber:number){
    if(fireNumber % 2 === 0){
      this.evenNumber.push(fireNumber)
    }else{
      this.oddNumber.push(fireNumber)
    }
  }


}
