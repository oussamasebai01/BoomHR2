import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './form/input/input.component';
import { ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule  ],
  exports: [
    HeaderComponent,
    InputComponent
  ]
})
export class SharedModule { }
