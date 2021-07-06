import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent {

 username= '';
 textColor = 'red';
 nameAdd = false;
 users = ['user'];

 onClick(){
   this.nameAdd = true;
   this.users.push(this.username)
   console.log(this.users)
 }
 onDelete(){
   this.nameAdd = false;
 }
}
