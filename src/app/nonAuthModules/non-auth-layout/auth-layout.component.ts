import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: `
    <div>
    <app-header></app-header>
    <div class=" wrapper d-flex justify-content-center align-items-center">
    <ng-content> </ng-content>
   </div>
   </div>
  `,
  styles: [
    `.wrapper{
      height:90vh;
    }
    .form{
      width:600px;
       box-shadow:7px 5px 20px #968b8b3d;
    }
    .info-text{
      font-size:20px;
    }
    .fm {
      width:1080px;
      
    }
    .app-input {
  height: 100%;
}
`
  ]
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
