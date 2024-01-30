import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges {
  title: string=  "Demo componnent";
  @Input() message: string= '';
  constructor(){
    console.log("Demo Componenet Conustructor Called")
    console.log(this.title)
    console.log(this.message)
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChange called");
    console.log(changes);
      
  }

}
