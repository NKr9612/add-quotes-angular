import { Component, Input } from '@angular/core';
import { quotesInterface } from '../models/quotesInterface';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  @Input()
 quotes:quotesInterface[];
 @Input()
 title:string;

}
