import { Component, EventEmitter, Output } from '@angular/core';
import { quotesInterface } from '../models/quotesInterface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() NewQuote = new EventEmitter<quotesInterface>();

  flag:boolean = false;
  quotation:quotesInterface = {author: '', quotation:'', votes: 0}


  addQuote():void {
    this.NewQuote.emit(this.quotation)
    this.quotation = {author: '', quotation:'', votes: 0};
  }

  toogleInput():void{
    this.flag = !this.flag;
}
}
