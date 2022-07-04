import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { quotesInterface } from './models/quotesInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes : quotesInterface[] = QUOTES;


  addVote(quote:quotesInterface, vote:number):void{
    quote.votes += vote;
  }

  bestQuotes(){
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes(){
    return this.quotes.filter(q=>q.votes <0)
  }

  addNewQuote(quotation:quotesInterface){
    this.quotes.unshift(quotation)
  }
}
