import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]'
})
export class BetterHighLightDirective implements OnInit{
  @Input() defualtColor:string = 'transparent';
  @Input() highlightedColor:string = 'lightgreen';
  @HostBinding('style.backgroundColor') backgrounColor:string = 'transparent';
  constructor(private elRef:ElementRef, private render:Renderer2) { }

  ngOnInit(){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'lightgreen')
    this.backgrounColor = this.defualtColor;
  }
  
  @HostListener('mouseover') mouseover(eventdata: Event){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'lightgreen');
    this.backgrounColor = this.highlightedColor;
    this.render.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
  @HostListener('mouseleave') mouseleave(eventdata: Event){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgrounColor = this.defualtColor;
    this.render.setStyle(this.elRef.nativeElement, 'color', 'black');
  }
}
