import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  
  @Input('srvElement') element : { type: string; name: string; content: string; };

  constructor() { 
    console.log('Constructor called !')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called !');
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called !')
  }
  
  ngDoCheck(){
    console.log('ngDoCheck called !')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called !')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked callled !')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called !')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked callled !')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy callled !')
  }
}
 