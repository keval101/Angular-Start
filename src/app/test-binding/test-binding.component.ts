import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent {

 username :string = '';
 textColor = 'red';
 nameAdd = false;

 onClick(){
   this.nameAdd = true;
 }
 onDelete(){
   this.nameAdd = false;
 }
}
