import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  
  @Input('srvElement') element : { type: string; name: string; content: string; };
  @Input() name:string;
  @ContentChild('contentParagraph', {static: true}) contentParagraph:ElementRef; // static:true means it give first element like there is 3 p-tag it takes only first p-tag

  constructor() { 
    console.log('Constructor called !')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called !');
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called !')
    console.log('Paragraph Content' + this.contentParagraph.nativeElement.textContent);
  }
  
  ngDoCheck(){
    console.log('ngDoCheck called !')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called !')
    console.log('Paragraph Content' + this.contentParagraph.nativeElement.textContent);
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
 