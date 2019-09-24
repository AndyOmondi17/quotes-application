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
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.dateCreation = new Date(quote.dateCreation);
    this.quotes.push(quote);
  }
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails ;
  }
  

  showDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isDelete, index){
    if(isDelete){

      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].Name} this quote?`);

      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }


  constructor() { }

  ngOnInit() {
  }
  
}
