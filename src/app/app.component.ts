import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lifecycle-hook';
  inputVal : string= " ";
 

  constructor(){
    console.log("App component constructor called");
  }
  onBtnCLick(inputEl: HTMLInputElement){
    this.inputVal = inputEl.value;
  }
}
