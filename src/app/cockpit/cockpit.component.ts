import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  // newServerName:string = '';
  // newServerContent:string = '';
  @ViewChild('serverContent') serverContent:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(nameInput){
    this.serverCreated.emit({serverName : nameInput.value, serverContent : this.serverContent.nativeElement.value}); //store input value
    // this.serverCreated.emit({serverName : this.newServerName, serverContent : this.newServerConent}); 
  }

  onAddBlueprint(nameInput){
    this.blueprintCreated.emit({serverName :nameInput.value, serverContent : this.serverContent.nativeElement.value} ); //store input value
    // this.blueprintCreated.emit({serverName : this.newServerName, serverContent : this.newServerConent}); 
  }
  
}
