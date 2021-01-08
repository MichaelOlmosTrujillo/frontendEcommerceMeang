import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  {
toggleValue = true;
  toggled($event){
    console.log( 'admin' ,$event);
    this.toggleValue = $event;
  }

}
