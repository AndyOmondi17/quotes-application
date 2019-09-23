import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,"A journey of a thousand miles begins with one step","Chinese man","Andy Omondi",new Date(2019,0,16)),
    new Quote(2,"I have no special talent. I am only passionately curious.","Albert Einstein","Andy Omondi",new Date(2019,0,16)),
    new Quote(3,"Stay hungry, stay foolish.","Steve Jobs","Andy Omondi",new Date(2019,0,16)),
    new Quote(4,"The successful warrior is the average man, with laser-like focus","Bruce Lee","Andy Omondi",new Date(2019,0,16)),
    new Quote(5,"The successful warrior is the average man, with laser-like focus","Theodore Rosevelte","Andy Omondi",new Date(2019,0,16)),

  ];


  constructor() { }

  ngOnInit() {
  }

}
