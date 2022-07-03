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
  flag:boolean = false;
  quotation:quotesInterface = {author: '', quotation:'', votes: 0}


  toogleInput():void{
      this.flag = !this.flag;
  }

  addQuote():void {
    this.quotes.unshift(this.quotation);
    this.quotation = {author: '', quotation:'', votes: 0};
  }

  addVote(quote:quotesInterface, vote:number):void{
    quote.votes += vote;
  }

  bestQuotes(){
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes(){
    return this.quotes.filter(q=>q.votes <0)
  }
}
