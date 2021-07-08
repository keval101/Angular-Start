import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-for-recape',
  templateUrl: './if-for-recape.component.html',
  styleUrls: ['./if-for-recape.component.css']
})
export class IfForRecapeComponent implements OnInit {
  
  Oddbtn = true;
  numbers:number[] = [1,2,3,4,5];
  oddNumbers:number[] = [1,3,5]
  evenNumbers:number[] = [2,4]
  constructor() { }

  ngOnInit(): void {
  }

}
