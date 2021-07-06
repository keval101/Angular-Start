import { Component } from '@angular/core';

@Component({
  selector: 'app-assisgment',
  templateUrl: './assisgment.component.html',
  styleUrls: ['./assisgment.component.css']
})
export class AssisgmentComponent {
  
  showSecret = false;
  log:any[] = [];

  onToggleDisplay(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date())
  }
}
